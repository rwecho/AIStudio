import prisma from "./services/prisma";
import PostCard from "./components/Post";
import { LoadMorePosts } from "./components/LoadMorePosts";
import { generateArticleMetadata } from "./lib/metadata";
import { Metadata } from "next";

// 设置页面为ISR模式，每10分钟重新生成一次
export const revalidate = 600; // 单位为秒，10分钟 = 600秒

// 首页的静态元数据
export const metadata: Metadata = generateArticleMetadata({
  title: "AIStudioX - 科技脉搏",
  description:
    "AIStudioX网站提供全球最新科技新闻、产品评测、深度解析。关注人工智能、区块链、元宇宙、Web3.0等前沿科技领域。",
  keywords: [
    "科技新闻",
    "科技资讯",
    "人工智能",
    "区块链",
    "元宇宙",
    "Web3.0",
    "科技前沿",
    "AIStudioX",
    "AutoGen",
    "AIStudio",
    "TechPulse",
  ],
  type: "website",
});

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const lang = ((await searchParams).lang as string) || "cn"; // 默认中文

  // 服务器端获取文章数据
  const top = 50;
  const articles = await prisma.article.findMany({
    where: {
      // status: "PUBLISHED", // 只获取已发布的文章
      translations: {
        some: {
          lang, // 筛选指定语言的翻译
        },
      },
    },
    include: {
      translations: {
        where: { lang }, // 只获取当前语言的翻译
      },
    },
    take: top, // 默认获取50条
    orderBy: {
      createdAt: "desc", // 按发布时间倒序
    },
  });

  // 检查是否还有更多文章可以加载
  const count = await prisma.article.count({
    where: {
      // status: "PUBLISHED",
      translations: {
        some: {
          lang,
        },
      },
    },
  });

  const hasMore = count > top;

  return (
    <section>
      {articles.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-600">暂无文章</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id}>
              {article.translations.length > 0 && (
                <PostCard
                  article={article}
                  translation={article.translations[0]}
                  lang={lang}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* 加载更多组件，传入当前语言参数 */}
      <LoadMorePosts initialArticles={articles} hasMore={hasMore} lang={lang} />
    </section>
  );
}
