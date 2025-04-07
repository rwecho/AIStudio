import { Readability } from "@mozilla/readability";
import React from "react";
import { JSDOM } from "jsdom";
import ArticleReadCard from "./ArticleReadCard";
import NoContentCard from "./NoContentCard";
import ErrorPageCard from "./ErrorPageCard";

export default async function Home({
  params,
}: Readonly<{
  params: Promise<{ url: string[] }>;
}>) {
  const segments = (await params).url;
  const protocol = segments[0].startsWith("https") ? "https://" : "http://";
  const targetUrl = `${protocol}${segments.slice(1).join("/")}`;
  const decodedUrl = decodeURIComponent(targetUrl);

  try {
    console.log(decodedUrl);
    // 获取目标网页内容
    const response = await fetch(`${decodedUrl}`);
    const html = await response.text();

    // 使用JSDOM解析HTML
    const doc = new JSDOM(html, {
      url: `https://${targetUrl}`,
      referrer: "https://www.aistudiox.design/",
      contentType: "text/html",
      includeNodeLocations: true,
      storageQuota: 10000000,
    });

    const reader = new Readability(doc.window.document);
    const article = reader.parse();

    return article ? <ArticleReadCard article={article} /> : <NoContentCard />;
  } catch (error) {
    return <ErrorPageCard error={error} />;
  }
}
