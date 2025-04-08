"use client";

import { Affix, Col, FloatButton, Row, Spin } from "antd";
import { useEffect, useRef } from "react";
import PostCard from "./PostCard";
import FilterCard from "./FilterCard";
import usePostsStore from "@/store/PostsStore";
import { useIsMobile } from "@/hooks/useMedia";
import { formatPost } from "@/lib/posts";

export default function PostsPage() {
  const loadingRef = useRef(null);
  const { posts, page, loadMore, hasMore, loading } = usePostsStore();
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      },
      { threshold: 0.5 }
    );
    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, loadMore, page]);

  return (
    <>
      {isMobile && (
        <Row>
          <FilterCard></FilterCard>
        </Row>
      )}

      <Row gutter={[16, 8]}>
        <Col span={isMobile ? 24 : 16}>
          <Row gutter={[16, 8]}>
            {posts.map((post, index) => (
              <Col key={`post-${index}`} span={24}>
                <PostCard post={formatPost(post)}></PostCard>
              </Col>
            ))}
          </Row>
        </Col>
        {!isMobile && (
          <Col span={8}>
            <Affix offsetTop={48}>
              <FilterCard></FilterCard>
            </Affix>
          </Col>
        )}
      </Row>
      <div
        ref={loadingRef}
        style={{
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        {loading && <Spin size="large" />}
        {!hasMore && posts.length > 0 && <div>没有更多数据了</div>}
        {!hasMore && posts.length === 0 && <div>暂无数据</div>}
      </div>
      <FloatButton.BackTop visibilityHeight={200} />
    </>
  );
}
