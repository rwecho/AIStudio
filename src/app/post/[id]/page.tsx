import { parseHtml } from "@/utils/html";
import { timeAgo } from "@/utils/formatDate";
import { Card, Image, Tag, Space, Badge } from "antd";
import Title from "antd/es/typography/Title";
import prisma from "@/lib/prisma";
import style from "./page.module.css";
import ViewCounter from "@/components/post/ViewCounter";
import LikeButton from "@/components/post/LikeButton";

// 状态显示帮助函数
const getStatusBadge = (status: string) => {
  const statusMap: Record<string, { color: string; text: string }> = {
    DRAFT: { color: "default", text: "草稿" },
    PENDING: { color: "processing", text: "待审核" },
    PUBLISHED: { color: "success", text: "已发布" },
    REJECTED: { color: "error", text: "已拒绝" },
    ARCHIVED: { color: "warning", text: "已归档" },
  };

  return statusMap[status] || { color: "default", text: status };
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const { id } = await params;
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });

    if (!post) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <Card>文章不存在或已被删除</Card>
        </div>
      );
    }

    // 使用服务端获取内容，不自动增加浏览量，让客户端组件处理
    const { title, content, firstImage } = parseHtml(post.content);
    const statusInfo = getStatusBadge(post.status);

    return (
      <div className={style.article}>
        <Card>
          <div className="flex justify-between items-center mb-4">
            <Title level={1} style={{ margin: 0 }}>
              {title}
            </Title>
            <div className="flex flex-col items-end">
              <Badge
                status={statusInfo.color as never}
                text={statusInfo.text}
              />
              {post.isApproved && (
                <Tag color="green" className="mt-1">
                  已审核
                </Tag>
              )}
              {post.isCleaned && (
                <Tag color="blue" className="mt-1">
                  已清理
                </Tag>
              )}
            </div>
          </div>

          <div className={style.imageContainer}>
            {post.hasCoverImage && post.coverImage ? (
              <Image
                src={post.coverImage}
                alt={title}
                className={style.image}
              />
            ) : firstImage ? (
              <Image src={firstImage} alt={title} className={style.image} />
            ) : null}
          </div>

          <Space className="mb-4">
            {post.author && <span>作者: {post.author}</span>}
            {post.published && (
              <span>{post.published && timeAgo(post.published)}</span>
            )}

            {post.tags.length > 0 &&
              post.tags.map((tag) => (
                <Tag key={tag} color="blue">
                  {tag}
                </Tag>
              ))}
          </Space>

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <div className="mt-4 text-gray-500 text-sm flex items-center">
            <ViewCounter id={post.id} initialViews={post.views} />
            <div className="ml-4">
              <LikeButton id={post.id} initialLikes={post.likes} />
            </div>
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
