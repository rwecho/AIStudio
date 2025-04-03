"use client";
import { useState, useEffect, useRef } from "react";
import { Col, Row, Spin } from "antd";
import PostRow from "@/components/ui/PostRow";
import styles from "./posts.module.css";
import { Post } from "@prisma/client";

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef(null);

  const loadMore = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/posts?page=${page}&pageSize=10`);
      const data = await res.json();
      setPosts((prev) => [...prev, ...data.posts]);
      setHasMore(data.posts.length === 10);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

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
  }, [page]);

  return (
    <div className="content">
      <Col>
        {posts.map((post) => (
          <Row key={post.id} style={{ marginBottom: "16px" }}>
            <PostRow post={post} />
          </Row>
        ))}
        <div ref={loadingRef} className={styles.loadingWrapper}>
          {loading && <Spin size="large" />}
          {!hasMore && <div>没有更多数据了</div>}
        </div>
      </Col>
    </div>
  );
}
