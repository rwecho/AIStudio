"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Article, ArticleTranslation } from "../generated/client";
import PostCard from "./Post";
import { LoadingSpinner } from "./LoadingSpinner";

interface ArticleWithTranslations extends Article {
  translations: ArticleTranslation[];
}

interface LoadMorePostsProps {
  initialArticles: ArticleWithTranslations[];
  hasMore: boolean;
  lang: string;
}

export const LoadMorePosts: React.FC<LoadMorePostsProps> = ({
  initialArticles,
  hasMore: initialHasMore,
  lang,
}) => {
  // 状态管理
  const [articles, setArticles] = useState<ArticleWithTranslations[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const loaderRef = useRef(null);

  // 加载更多文章
  const loadMoreArticles = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const res = await fetch(
        `/api/posts?page=${page + 1}&pageSize=12&lang=${lang}`
      );
      const data = await res.json();
      if (data.articles.length === 0 || !data.hasMore) {
        setHasMore(false);
      }
      setArticles((prevArticles) => [...prevArticles, ...data.articles]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("加载更多文章失败:", error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page, lang]);

  // 初始化状态和语言变更时重置
  useEffect(() => {
    setArticles([]);
    setPage(1);
    setHasMore(initialHasMore);
  }, [initialArticles, lang, initialHasMore]);

  // 使用 Intersection Observer 监测元素是否进入视图
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMore) {
          loadMoreArticles();
        }
      },
      { threshold: 1.0 }
    );
    const currentLoaderRef = loaderRef.current;
    if (currentLoaderRef) {
      observer.observe(currentLoaderRef);
    }
    return () => {
      if (currentLoaderRef) {
        observer.unobserve(currentLoaderRef);
      }
    };
  }, [hasMore, loadMoreArticles, loading, page]);

  // 如果没有更多内容可加载且没有已加载的额外内容，不渲染组件
  if (!hasMore && articles.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      {/* 渲染已加载的额外文章 */}
      {articles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {articles.map((article) => (
            <PostCard key={article.id} article={article} lang={lang} />
          ))}
        </div>
      )}

      {/* 加载指示器 */}
      <div
        ref={loaderRef}
        className="flex justify-center items-center py-8 mt-6"
      >
        {loading ? (
          <LoadingSpinner />
        ) : hasMore ? (
          <button
            onClick={loadMoreArticles}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-300"
          >
            加载更多
          </button>
        ) : articles.length > 0 ? (
          <p className="text-gray-500">已加载全部内容</p>
        ) : null}
      </div>
    </div>
  );
};
