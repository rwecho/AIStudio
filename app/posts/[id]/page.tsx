import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "../../services/prisma";
import { PostStatus, WechatPublishStatus } from "../../generated/client";
import ImageButton from "../../components/ImageButton";
import {
  generateArticleJsonLd,
  generateArticleMetadata,
} from "../../lib/metadata";
import JsonLd from "../../components/JsonLd";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Media from "@/app/components/Media";
import PublishToWechat from "@/app/components/PublishToWechat";

// 设置页面重新验证时间，每小时重新验证一次
export const revalidate = 6000; // 单位为秒，1小时 = 3600秒

// 预生成前50篇文章的静态页面
export async function generateStaticParams() {
  const posts = await prisma.post.findMany({
    where: {
      status: PostStatus.PUBLISHED,
    },
    select: { id: true },
    orderBy: {
      published: "desc",
    },
    take: 50,
  });

  return posts.map((post) => ({
    id: post.id,
  }));
}

// 生成文章页面的动态元数据
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const post = await prisma.post.findUnique({
    where: { id: (await params).id },
  });

  if (!post) {
    return generateArticleMetadata({
      title: "文章未找到",
      description: "抱歉，您请求的文章不存在或已被移除。",
    });
  }

  // 从内容中提取纯文本用作描述
  const plainTextContent = post.formattedContent
    ? post.formattedContent.replace(/<[^>]*>?/gm, "").slice(0, 200) + "..."
    : post.content.slice(0, 200) + "...";

  // 构建文章的元数据
  return generateArticleMetadata({
    title: post.title,
    description: plainTextContent,
    keywords: post.tags,
    type: "article",
    publishedTime: post.published?.toISOString(),
    modifiedTime: post.updatedAt?.toISOString(),
    authors: post.author ? [post.author] : undefined,
    section: "科技",
    image:
      post.mediaFiles.length > 0
        ? `/api/oss?ossKey=${post.mediaFiles[0]}`
        : undefined,
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${post.id}`,
  });
}

async function getPost(id: string) {
  const post = await prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    return null;
  }

  // 增加文章阅读量
  await prisma.post.update({
    where: { id },
    data: { views: { increment: 1 } },
  });

  return post;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const post = await getPost((await params).id);

  if (!post) {
    notFound();
  }

  const formattedDate = post.published
    ? new Date(post.published).toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  // 使用格式化内容（如果有）
  const content = post.formattedContent || post.content;

  // 获取文章的精简描述用于 JSON-LD
  const plainTextContent = post.formattedContent
    ? post.formattedContent.replace(/<[^>]*>?/gm, "").slice(0, 200) + "..."
    : post.content.slice(0, 200) + "...";

  // 生成文章的结构化数据
  const articleJsonLd = generateArticleJsonLd({
    title: post.title,
    description: plainTextContent,
    authorName: post.author || "科技前沿",
    publishedTime: post.published?.toISOString(),
    modifiedTime: post.updatedAt?.toISOString(),
    image:
      post.mediaFiles.length > 0
        ? `/api/oss?ossKey=${post.mediaFiles[0]}`
        : undefined,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${post.id}`,
    tags: post.tags,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 注入文章的结构化数据 */}
      <JsonLd data={articleJsonLd} />

      <Link
        href="/"
        className="text-blue-500 hover:underline mb-6 inline-block"
      >
        &larr; 返回首页
      </Link>

      <article
        className="bg-white rounded-lg shadow-md overflow-hidden"
        id={`article-${post.id}`}
      >
        {post.mediaFiles.length > 0 && (
          <div className="relative w-full h-[400px]">
            <Media
              mediaUrl={`/api/oss?ossKey=${post.mediaFiles[0]}`}
              title={post.title}
            />
          </div>
        )}

        {post.mediaFiles.length > 1 && (
          <div className="flex flex-wrap gap-4 p-6">
            {post.mediaFiles.slice(1).map((mediaFile, index) => (
              <div key={index} className="w-1/3 aspect-video relative">
                <Media
                  mediaUrl={`/api/oss?ossKey=${mediaFile}`}
                  title={post.title}
                />
              </div>
            ))}
          </div>
        )}

        <div className="p-6 md:p-8">
          {post.title && (
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>
          )}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center text-gray-600 mb-8 text-sm">
            {post.author && <span className="mr-4">作者: {post.author}</span>}
            {post.source && <span className="mr-4">来源: {post.source}</span>}
            {formattedDate && <span>发布于: {formattedDate}</span>}
          </div>

          <div className="prose prose-lg max-w-none">
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
              {post.formattedContent || post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>
      {/* 分割线 */}
      <div className="border-t border-gray-200 my-8" />

      {/* 文章底部操作按钮 */}
      <div className="flex flex-row items-start justify-between mt-8">
        {post.link && (
          <div className="">
            <p className="text-gray-600">原文链接：</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-all"
            >
              {post.link}
            </a>
          </div>
        )}

        {/* 添加发布到公众号按钮，传递完整的文章对象 */}
        <PublishToWechat
          post={post}
          isAlreadyPublished={
            !!(
              post as unknown as {
                wechatPublish: {
                  status: string;
                  createdAt: string;
                };
              }
            ).wechatPublish
          }
          publishStatus={
            (
              post as unknown as {
                wechatPublish: {
                  status: WechatPublishStatus;
                };
              }
            ).wechatPublish?.status || null
          }
        />
      </div>

      {JSON.stringify(post)}
    </div>
  );
}
