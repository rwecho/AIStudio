import Link from "next/link";
import { Post } from "../generated/client";
import Media from "./Media";

// 移除 FC 类型和 useState，使其成为服务器组件
const PostCard = ({ post }: { post: Post }) => {
  // 获取发布日期的格式化显示
  const formattedDate = post.published
    ? new Date(post.published).toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  // 提取内容摘要（限制在100个字符以内）
  const excerpt = post.formattedContent
    ? post.formattedContent.replace(/<[^>]*>?/gm, "").slice(0, 100) + "..."
    : post.content.slice(0, 100) + "...";

  // 获取图片URL
  const imageUrl =
    post.mediaFiles.length > 0 ? `/api/oss?ossKey=${post.mediaFiles[0]}` : null;

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          {/* 使用新的 Media 组件处理多媒体展示 */}
          <Media mediaUrl={imageUrl} title={post.title} />
        </div>
      )}

      <div className="p-5 flex flex-col flex-grow">
        <Link href={`/posts/${post.id}`} className="hover:underline">
          <p className="text-gray-600 mb-4 text-sm line-clamp-3">{excerpt}</p>
        </Link>
        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{post.source || "未知来源"}</span>
            <div className="flex items-center gap-2">
              <span>{formattedDate || "未知日期"}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
