"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

interface JsonLdProps {
  data: Record<string, any> | Record<string, any>[];
}

/**
 * JsonLd 组件用于在页面中注入 JSON-LD 结构化数据
 * 这对于 SEO 和搜索引擎结果展示非常重要
 */
export default function JsonLd({ data }: JsonLdProps) {
  // 使用客户端渲染确保正确处理动态数据
  const [markup, setMarkup] = useState<string>("");

  useEffect(() => {
    setMarkup(JSON.stringify(data));
  }, [data]);

  return (
    <Script
      id={`json-ld-${Math.random().toString(36).substring(7)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: markup }}
      strategy="afterInteractive"
    />
  );
}
