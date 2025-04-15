import { notFound } from "next/navigation";
import prisma from "../../services/prisma";
import { ArticleStatus } from "../../generated/client";
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
  const articles = await prisma.article.findMany({
    where: {
      status: ArticleStatus.PUBLISHED,
    },
    select: { id: true },
    orderBy: {
      publishedAt: "desc",
    },
    take: 50,
  });

  return articles.map((article) => ({
    id: article.id,
  }));
}

// 生成文章页面的动态元数据
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const { id } = await params;
  const lang = ((await searchParams).lang as string) || "cn"; // 默认中文

  const article = await prisma.article.findUnique({
    where: { id },
    include: {
      translations: {
        where: { lang },
      },
    },
  });

  if (!article || !article.translations?.length) {
    return generateArticleMetadata({
      title: "文章未找到",
      description: "抱歉，您请求的文章不存在或已被移除。",
    });
  }

  const translation = article.translations[0];

  // 从内容中提取纯文本用作描述
  const plainTextContent =
    translation.summary ||
    translation.content.replace(/<[^>]*>?/gm, "").slice(0, 200) + "...";

  // 构建文章的元数据
  return generateArticleMetadata({
    title: translation.title,
    description: plainTextContent,
    keywords: translation.keywords,
    type: "article",
    publishedTime: article.publishedAt?.toISOString(),
    modifiedTime: article.updatedAt?.toISOString(),
    authors: article.author ? [article.author] : undefined,
    section: translation.categories?.[0] || "科技",
    image: translation.cover
      ? `/api/oss?ossKey=${translation.cover}`
      : undefined,
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${article.id}?lang=${lang}`,
  });
}

async function getArticle(id: string, lang: string) {
  const article = await prisma.article.findUnique({
    where: { id },
    include: {
      translations: {
        where: { lang },
        include: {
          references: true,
        },
      },
      wechatPublish: true,
    },
  });

  if (!article || !article.translations?.length) {
    return null;
  }

  // 增加文章阅读量
  await prisma.article.update({
    where: { id },
    data: { views: { increment: 1 } },
  });

  return article;
}

export default async function ArticlePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // 获取当前语言或默认中文
  const lang = ((await searchParams).lang as string) || "cn"; // 默认中文

  const article = await getArticle((await params).id, lang);

  if (!article) {
    notFound();
  }

  const translation = article.translations[0];

  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  // 获取文章的精简描述用于 JSON-LD
  const plainTextContent =
    translation.summary ||
    translation.content.replace(/<[^>]*>?/gm, "").slice(0, 200) + "...";

  // 生成文章的结构化数据
  const articleJsonLd = generateArticleJsonLd({
    title: translation.title,
    description: plainTextContent,
    authorName: article.author || "科技前沿",
    publishedTime: article.publishedAt?.toISOString(),
    modifiedTime: article.updatedAt?.toISOString(),
    image: translation.cover
      ? `/api/oss?ossKey=${translation.cover}`
      : undefined,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${article.id}?lang=${lang}`,
    tags: translation.keywords,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 注入文章的结构化数据 */}
      <JsonLd data={articleJsonLd} />

      <article
        className="bg-white rounded-lg shadow-md overflow-hidden"
        id={`article-${article.id}`}
      >
        {translation.cover && (
          <div className="relative w-full h-[400px]">
            <Media
              mediaUrl={`/api/oss?ossKey=${translation.cover}`}
              title={translation.title}
            />
          </div>
        )}

        <div className="p-6 md:p-8">
          {translation.title && (
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {translation.title}
            </h1>
          )}

          {translation.categories.length > 0 && (
            <div className="hidden flex-wrap gap-2 mb-6 md:flex">
              {translation.categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          <div className="hidden md:flex items-center text-gray-600 mb-8 text-sm">
            {article.author && (
              <span className="mr-4">作者: {article.author}</span>
            )}
            {formattedDate && (
              <span className="mr-4">发布于: {formattedDate}</span>
            )}
          </div>

          {translation.summary && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6 italic">
              {translation.summary}
            </div>
          )}

          {translation.mediaFiles && translation.mediaFiles.length > 0 && (
            <div className="flex flex-wrap gap-4 my-4">
              {translation.mediaFiles.map((media, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3">
                  <Media
                    mediaUrl={`/api/oss?ossKey=${media}`}
                    title={""}
                    width={400}
                    height={300}
                  />
                </div>
              ))}
            </div>
          )}

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
              {translation.content}
            </ReactMarkdown>
          </div>

          {/* 参考资料 */}
          {translation.references && translation.references.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4">参考资料</h3>
              <ul className="list-disc pl-5 space-y-2">
                {translation.references.map((ref, index) => (
                  <li key={index}>
                    {ref.caption}:
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline ml-1"
                    >
                      {ref.url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>

      {/* 分割线 */}
      <div className="border-t border-gray-200 my-8" />

      {/* 文章底部操作按钮 */}
      <div className="flex flex-row items-start justify-between mt-8">
        {/* 添加发布到公众号按钮，传递完整的文章对象 */}
        <PublishToWechat
          article={article}
          lang={lang}
          isAlreadyPublished={!!article.wechatPublish}
          publishStatus={article.wechatPublish?.status || null}
        />
      </div>
    </div>
  );
}
