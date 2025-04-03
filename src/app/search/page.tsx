"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card, List, Skeleton, Empty, Pagination, Tag, Space } from "antd";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { timeAgo } from "@/utils/formatDate";
import { parseHtml } from "@/utils/html";

interface Tag {
  id: string;
  name: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
  published: string | null;
  author: string | null;
  likes: number;
  views: number;
  tags: Tag[];
  hasCoverImage: boolean;
  coverImage: string | null;
}

interface Pagination {
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

interface SearchResult {
  posts: Post[];
  pagination: Pagination;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchResult | null>(null);

  useEffect(() => {
    if (query) {
      fetchSearchResults(query, page, pageSize);
    }
  }, [query, page, pageSize]);

  const fetchSearchResults = async (
    q: string,
    page: number,
    pageSize: number
  ) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(
          q
        )}&page=${page}&pageSize=${pageSize}`
      );

      if (response.ok) {
        const data: SearchResult = await response.json();
        setResults(data);
      } else {
        console.error("搜索失败:", await response.text());
      }
    } catch (error) {
      console.error("搜索请求出错:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage: number, pageSize?: number) => {
    setPage(newPage);
    if (pageSize) setPageSize(pageSize);
  };

  const handleSearch = (value: string) => {
    // 使用URLSearchParams在客户端更新URL
    const params = new URLSearchParams(window.location.search);
    params.set("q", value);

    // 更新URL，但不进行导航（因为我们已在搜索页面）
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );

    // 重置分页并执行搜索
    setPage(1);
    fetchSearchResults(value, 1, pageSize);
  };

  // 提取内容摘要（无HTML标签，截取适当长度）
  const getExcerpt = (content: string, maxLength = 150) => {
    const { content: text } = parseHtml(content);
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-6">
        <h1 className="text-2xl mb-4">搜索结果</h1>
        <SearchBar
          className="w-full max-w-2xl mb-6"
          placeholder="搜索文章、标签..."
          onSearch={handleSearch}
        />

        {query && (
          <p className="text-gray-600">
            搜索 {query} 的结果
            {results && `: 找到 ${results.pagination.totalCount} 个匹配项`}
          </p>
        )}
      </Card>

      {loading ? (
        <Card>
          <Skeleton active paragraph={{ rows: 5 }} />
        </Card>
      ) : !results || results.posts.length === 0 ? (
        <Card>
          <Empty description={query ? "未找到匹配结果" : "请输入搜索关键词"} />
        </Card>
      ) : (
        <>
          <List
            dataSource={results.posts}
            renderItem={(post) => (
              <List.Item key={post.id}>
                <Card className="w-full">
                  <div className="flex">
                    {post.hasCoverImage && post.coverImage && (
                      <div className="mr-4 w-32 h-24 flex-shrink-0">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                    )}
                    <div className="flex-grow">
                      <Link
                        href={`/post/${post.id}`}
                        className="text-xl font-medium"
                      >
                        {post.title}
                      </Link>
                      <p className="text-gray-600 my-2">
                        {getExcerpt(post.content)}
                      </p>
                      <Space className="mt-2 text-sm text-gray-500">
                        {post.author && <span>作者: {post.author}</span>}
                        {post.published && (
                          <span>{timeAgo(new Date(post.published))}</span>
                        )}
                        <span>浏览: {post.views}</span>
                        <span>点赞: {post.likes}</span>
                      </Space>
                      <div className="mt-2">
                        {post.tags.map((tag) => (
                          <Tag key={tag.id} color="blue">
                            {tag.name}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </List.Item>
            )}
          />

          <div className="mt-6 flex justify-center">
            <Pagination
              current={page}
              pageSize={pageSize}
              total={results.pagination.totalCount}
              onChange={handlePageChange}
              showSizeChanger
              showQuickJumper
            />
          </div>
        </>
      )}
    </div>
  );
}
