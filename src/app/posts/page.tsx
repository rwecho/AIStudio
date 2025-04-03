"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Col, Row, Spin, Input, Space, Card, Affix } from "antd";
import PostRow from "@/components/ui/PostRow";
import styles from "./posts.module.css";
import { Post } from "@prisma/client";
import { SearchOutlined } from "@ant-design/icons";

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef(null);

  // 筛选条件状态
  const [search, setSearch] = useState("");

  const resetList = useCallback(() => {
    setPosts([]);
    setPage(1);
    setHasMore(true);
  }, []);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      // 构建带筛选条件的URL
      let url = `/api/posts?page=${page}&pageSize=10`;

      if (search) {
        url += `&search=${encodeURIComponent(search)}`;
      }

      const res = await fetch(url);
      const data = await res.json();
      setPosts((prev) => [...prev, ...data.posts]);
      setHasMore(data.hasMore);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, [loading, hasMore, page, search]);

  // 当筛选条件变化时，重置列表并加载数据
  useEffect(() => {
    resetList();
  }, [search, resetList]);

  useEffect(() => {
    // 首次加载或重置列表后自动加载第一页数据
    if (page === 1 && posts.length === 0 && !loading) {
      loadMore();
    }
  }, [page, posts.length, loading, loadMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.5 }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => observer.disconnect();
  }, [loadMore, page]);

  // 处理搜索
  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <div className="content">
      <Row gutter={16}>
        <Col span={16}>
          {posts.map((post) => (
            <Row key={post.id} style={{ marginBottom: "16px" }}>
              <PostRow post={post} />
            </Row>
          ))}
        </Col>

        <Col span={8}>
          <Affix offsetTop={24}>
            <Card title="筛选条件" variant="borderless">
              <Space direction="vertical" style={{ width: "100%" }}>
                <Input
                  placeholder="搜索标题、内容、来源或作者"
                  prefix={<SearchOutlined />}
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                  allowClear
                />
              </Space>
            </Card>
          </Affix>
        </Col>
      </Row>
      <div ref={loadingRef} className={styles.loadingWrapper}>
        {loading && <Spin size="large" />}
        {!hasMore && <div>没有更多数据了</div>}
      </div>
    </div>
  );
}
