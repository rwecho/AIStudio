import React from "react";
import ArticleReadCard from "./ArticleReadCard";
import NoContentCard from "./NoContentCard";
import ErrorPageCard from "./ErrorPageCard";
import axiosInstance from "@/lib/axios";

export default async function TranslatePage({
  params,
}: Readonly<{
  params: Promise<{ url: string[] }>;
}>) {
  const segments = (await params).url;
  const protocol = segments[0].startsWith("https") ? "https://" : "http://";
  const targetUrl = `${protocol}${segments.slice(1).join("/")}`;
  const decodedUrl = decodeURIComponent(targetUrl);

  try {
    // 1. 获取文章内容
    const { data: readResponse } = await axiosInstance.post(
      "/api/readablility",
      {
        url: decodedUrl,
      }
    );

    const { data: article, error: readError } = readResponse;
    if (readError) throw new Error(readError);

    if (!article) return <NoContentCard />;
    console.log(article);

    // 2. 翻译文章内容
    const { data: translateResponse } = await axiosInstance.post(
      "/api/translate",
      {
        content: article.content,
        targetLang: "zh-CN",
      }
    );

    const { data: translatedContent, error: translateError } =
      translateResponse;
    if (translateError) throw new Error(translateError);

    // 3. 更新文章内容为翻译后的内容
    const translatedArticle = {
      ...article,
      content: translatedContent,
      lang: "zh-CN",
    };

    return <ArticleReadCard article={translatedArticle} />;
  } catch (error) {
    return <ErrorPageCard error={error} />;
  }
}
