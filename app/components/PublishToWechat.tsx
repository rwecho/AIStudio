"use client";
import { useState } from "react";
import {
  Article,
  ArticleTranslation,
  WechatPublishStatus,
} from "../generated/client";

interface PublishToWechatProps {
  article: Article & { translations: ArticleTranslation[] };
  lang: string;
  isAlreadyPublished?: boolean;
  publishStatus?: WechatPublishStatus | null;
}

const formatAssets = (html: string) => {
  // 找到 html 里面的图片、视频和音乐，在url前面增加代理地址
  const regex =
    /<img[^>]+src="([^">]+)"|<video[^>]+src="([^">]+)"|<audio[^>]+src="([^">]+)"/g;
  html = html.replace(regex, (match, imgSrc, videoSrc, audioSrc) => {
    const src = imgSrc || videoSrc || audioSrc;
    if (!src.startsWith("http")) {
      const url = process.env.NEXT_PUBLIC_API_URL;
      if (!url) {
        throw new Error("NEXT_PUBLIC_API_URL is not defined");
      }
      return match.replace(src, src.replace("/redirect", ""));
    }
    return match.replace(src, src.replace("/redirect", ""));
  });
  return html;
};

const getCardInnerHtml = (cardId: string) => {
  const card = document.getElementById(cardId);
  if (!card) return [null, null];

  // 创建一个新的blob，包含完整的HTML和内联样式
  const styles = Array.from(document.styleSheets)
    .filter((styleSheet) => {
      try {
        return (
          !styleSheet.href || styleSheet.href.startsWith(window.location.origin)
        );
      } catch {
        return false;
      }
    })
    .map((styleSheet) => {
      try {
        return Array.from(styleSheet.cssRules)
          .map((rule) => rule.cssText)
          .join("\n");
      } catch {
        return "";
      }
    })
    .join("\n");

  // 从innerHtml 移除 .ant-image-mask 元素
  const maskElements = card.querySelectorAll(".ant-image-mask");
  maskElements.forEach((element) => {
    element.parentNode?.removeChild(element);
  });

  const formattedHtml = formatAssets(card.innerHTML);
  const content = `
      <html>
        <head>
          <style>${styles}</style>
        </head>
        <body>
          <div>${formattedHtml}</div>
        </body>
      </html>
    `;
  return [content, card.innerText];
};

export default function PublishToWechat({
  article,
  lang,
  isAlreadyPublished = false,
  publishStatus = null,
}: PublishToWechatProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // 获取当前语言的翻译
  const translation = article.translations.find((t) => t.lang === lang);

  if (!translation) {
    return null; // 如果没有翻译，不显示按钮
  }

  // 根据发布状态返回相应的状态标签
  const getStatusBadge = () => {
    if (!isAlreadyPublished) return null;

    switch (publishStatus) {
      case "PENDING":
        return (
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-md">
            待发布
          </span>
        );
      case "PUBLISHED":
        return (
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-md">
            已发布
          </span>
        );
      case "FAILED":
        return (
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-md">
            发布失败
          </span>
        );
      default:
        return null;
    }
  };

  // 处理提交发布请求
  const handlePublish = async () => {
    const cardId = `article-${article.id}`;
    const [content] = getCardInnerHtml(cardId);
    console.log("发布内容:", content);

    // 如果已经发布或者正在加载，则不处理
    if (isAlreadyPublished || loading) return;

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const cover = translation.cover
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/oss?ossKey=${translation.cover}`
        : "";

      const response = await fetch("/api/posts/wechat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: article.id,
          lang: lang,
          title: translation.title,
          content: content,
          cover: cover,
          author: article.author || "",
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "发布请求失败");
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "发布过程中出现错误");
      console.error("发布到微信公众号失败:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-3">
      {getStatusBadge()}
      {!isAlreadyPublished && (
        <button
          onClick={handlePublish}
          disabled={loading}
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              处理中...
            </>
          ) : (
            <>发布到公众号</>
          )}
        </button>
      )}
      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
      {success && (
        <p className="mt-2 text-xs text-green-600">
          已添加到发布队列，请稍后查看
        </p>
      )}
    </div>
  );
}
