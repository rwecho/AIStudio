"use client";
import { Post } from "@prisma/client";
import React from "react";
import { Card, Space, Typography, message } from "antd";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { timeAgo } from "@/utils/formatDate";
import MediaFile from "./MediaFile";
import { CopyOutlined } from "@ant-design/icons";
import "./markdown-styles.css"; // 引入样式文件

const { Text } = Typography;
const preprocessMarkdown = (content: string) => {
  return content.replace(/\*\*(.*?)\s+\*\*/g, "**$1**");
};

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

const PostCard = ({ post }: { post: Post }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const cover = post.mediaFiles.length > 0 ? post.mediaFiles[0] : "";

  const restMediaFiles = post.mediaFiles.slice(1);

  const handleCopy = (cardId: string) => {
    const card = document.getElementById(cardId);
    if (!card) return;

    // 创建一个新的blob，包含完整的HTML和内联样式
    const styles = Array.from(document.styleSheets)
      .filter((styleSheet) => {
        try {
          return (
            !styleSheet.href ||
            styleSheet.href.startsWith(window.location.origin)
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

    console.log("复制的内容: ", formattedHtml);

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

    // 使用 Clipboard API 复制富文本
    const clipboardItem = new ClipboardItem({
      "text/html": new Blob([content], { type: "text/html" }),
      "text/plain": new Blob([card.innerText], { type: "text/plain" }),
    });

    navigator.clipboard
      .write([clipboardItem])
      .then(() => messageApi.success("复制成功（带样式）"))
      .catch((err) => {
        console.error("复制失败: ", err);
        // 回退到普通文本复制
        navigator.clipboard.writeText(card.innerText);
        messageApi.success("复制成功（纯文本）");
      });
  };

  return (
    <>
      {contextHolder}
      <Card
        style={{ margin: "16px 0" }}
        actions={[
          <CopyOutlined
            key="setting"
            onClick={() => handleCopy("post-card-" + post.id)}
          />,
        ]}
      >
        <div className="markdown-content" id={"post-card-" + post.id}>
          <Space
            style={{
              marginBottom: "16px",
            }}
          >
            {cover && <MediaFile file={cover} />}
            {restMediaFiles.length > 0 && (
              <Space size={16} wrap>
                {restMediaFiles.map((file, index) => (
                  <MediaFile key={index} file={file} />
                ))}
              </Space>
            )}
          </Space>

          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
            components={{
              code({ className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    {...(props as any)}
                    language={match[1]}
                    PreTag="div"
                    style={vscDarkPlus}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {preprocessMarkdown(post.content)}
          </ReactMarkdown>
        </div>
        <Space
          size={16}
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "16px",
          }}
        >
          <Space>
            <Text type="secondary">{post.source}</Text>
          </Space>
          <Space>
            <Text type="secondary">{timeAgo(post.published!)}</Text>
          </Space>
        </Space>
      </Card>
    </>
  );
};

export default PostCard;
