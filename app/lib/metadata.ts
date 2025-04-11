import { Metadata } from "next";

// 网站基础配置
const siteName = "科技前沿";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://tech-news.example.com";
const siteDescription =
  "最新科技资讯，尽在掌握。提供全球最新科技新闻、产品评测、深度解析。";

interface GenerateMetadataOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  canonicalUrl?: string;
}

/**
 * 生成页面元数据
 */
export function generateArticleMetadata({
  title,
  description,
  keywords,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  section,
  canonicalUrl,
}: GenerateMetadataOptions): Metadata {
  const metaTitle = title ? `${title} | ${siteName}` : siteName;
  const metaDescription = description || siteDescription;
  const metaImage =
    image || `${siteUrl}/api/og?title=${encodeURIComponent(metaTitle)}`;
  const url = canonicalUrl || siteUrl;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords?.join(", "),
    authors: authors?.map((author) => ({ name: author })),
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url,
      siteName,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: "zh_CN",
      type,
      ...(type === "article" && {
        article: {
          publishedTime,
          modifiedTime,
          authors: authors || [],
          section,
        },
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

/**
 * 生成文章的 JSON-LD 结构化数据
 */
export function generateArticleJsonLd({
  title,
  description,
  authorName,
  publishedTime,
  modifiedTime,
  image,
  url,
  tags,
}: {
  title: string;
  description: string;
  authorName: string;
  publishedTime?: string;
  modifiedTime?: string;
  image?: string;
  url: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description,
    image,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: tags?.join(", "),
  };
}

/**
 * 生成网站的 JSON-LD 结构化数据
 */
export function generateWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
