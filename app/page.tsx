import prisma from "./services/prisma";
import PostCard from "./components/Post";
import { LoadMorePosts } from "./components/LoadMorePosts";
import { generateArticleMetadata } from "./lib/metadata";
import { Metadata } from "next";

// 设置页面为ISR模式，每10分钟重新生成一次
export const revalidate = 600; // 单位为秒，10分钟 = 600秒

// 首页的静态元数据
export const metadata: Metadata = generateArticleMetadata({
  title: '科技前沿 - 最新科技资讯',
  description: '科技前沿网站提供全球最新科技新闻、产品评测、深度解析。关注人工智能、区块链、元宇宙、Web3.0等前沿科技领域。',
  keywords: ['科技新闻', '科技资讯', '人工智能', '区块链', '元宇宙', 'Web3.0', '科技前沿'],
  type: 'website',
});

export default async function Home() {
  // 服务器端获取文章数据
  const top = 50
  const posts = await prisma.post.findMany({
    where: {
      // status: "PUBLISHED", // 只获取已发布的文章
    },
    take: top, // 默认获取50条
    orderBy: {
      published: "desc", // 按发布时间倒序
    },
  });

  // 检查是否还有更多文章可以加载
  const count = await prisma.post.count({
    where: {
      // status: "PUBLISHED",
    },
  });
  
  const hasMore = count > top;

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-center mb-2">科技前沿</h1>
        <p className="text-xl text-gray-600 text-center">最新科技资讯，尽在掌握</p>
      </header>

      <section>
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">暂无文章</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
        
        {/* 加载更多组件，只在客户端渲染 */}
        <LoadMorePosts initialPosts={posts} hasMore={hasMore} />
      </section>
    </div>
  );
}
