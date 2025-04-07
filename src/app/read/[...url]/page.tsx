import React from "react";
import ArticleReadCard from "./ArticleReadCard";
import NoContentCard from "./NoContentCard";
import ErrorPageCard from "./ErrorPageCard";
import axiosInstance from "@/lib/axios";

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
    const { data: response } = await axiosInstance.post("/api/readablility", {
      url: decodedUrl,
    });

    const { data: article, error } = response;

    if (error) {
      throw new Error(error);
    }

    return article ? <ArticleReadCard article={article} /> : <NoContentCard />;
  } catch (error) {
    return <ErrorPageCard error={error} />;
  }
}
