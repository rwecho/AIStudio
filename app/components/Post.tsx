import Link from "next/link";
import { Article, ArticleTranslation } from "../generated/client";
import Media from "./Media";
import { readableDate } from "../services/dateutils";

const PostCard = ({
  article,
  translation,
  lang,
}: {
  article: Article;
  translation: ArticleTranslation;
  lang: string;
}) => {
  // 提取内容摘要（限制在100个字符以内）
  const excerpt =
    translation.summary ||
    translation.content.replace(/<[^>]*>?/gm, "").slice(0, 100) + "...";

  // 获取图片URL
  const imageUrl = translation.cover
    ? `/api/oss?ossKey=${translation.cover}`
    : null;

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <Media
            mediaUrl={imageUrl}
            title={translation.title}
            width={400}
            height={300}
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-grow">
        <Link
          href={`/posts/${article.id}?lang=${lang}`}
          className="hover:underline"
        >
          <h3 className="text-xl font-bold mb-2">{translation.title}</h3>
          <p className="text-gray-600 mb-4 text-sm line-clamp-3">{excerpt}</p>
        </Link>
        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {translation.categories.slice(0, 3).map((category, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
              >
                {category}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{article.author || "未知作者"}</span>
            <div className="flex items-center gap-2">
              <span>{readableDate(article.createdAt) || "未知日期"}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
