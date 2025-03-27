import { parseHtml } from "@/utils/html";
import { timeAgo } from "@/utils/formatDate";
import { Card, Image, Tag, Space } from "antd";
import Title from "antd/es/typography/Title";
import prisma from "@/lib/prisma";

export default async function PostPage({ params }: { params: { id: string } }) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: params.id,
      },
      include: {
        // category: true,
      },
    });

    if (!post) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <Card>文章不存在或已被删除</Card>
        </div>
      );
    }

    const { title, content, firstImage } = parseHtml(post.content);

    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <Card>
          {firstImage && (
            <Image
              src={firstImage}
              alt={title}
              style={{
                maxWidth: "100%",
                height: "auto",
                marginBottom: "24px",
              }}
            />
          )}
          <Title>{title}</Title>

          <Space className="mb-6">
            {post.author && (
              <span className="text-gray-600">作者: {post.author}</span>
            )}
            <span className="text-gray-500">
              {post.published && timeAgo(post.published)}
            </span>
            {/* {post.category && <Tag color="blue">{post.category.name}</Tag>} */}
            {post.tags.map((tag: string) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Space>

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <div className="mt-4 text-gray-500 text-sm">
            <span>浏览: {post.views}</span>
            <span className="ml-4">点赞: {post.likes}</span>
          </div>
        </Card>
      </div>
    );
  } catch (error) {
    console.error("Error loading post:", error);
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Card>加载文章失败</Card>
      </div>
    );
  }
}
