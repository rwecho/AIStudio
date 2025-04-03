import Link from "next/link";
import prisma from "@/lib/prisma";
import { Col, Row } from "antd";
import PostCard from "../ui/PostCard";

export default async function NewsSection() {
  // 获取今日前10个
  // 新闻数据
  const posts = await prisma.post.findMany({
    take: 10,
    orderBy: {
      published: "desc",
    },
    where: {
      source: {
        not: null,
        // equals: "ZaihuaNews-Telegram",
      },
    },
  });

  return (
    <section className="content">
      <div className="section-header">
        <h2 className="section-title">新鲜AI资讯</h2>
        <Link href="/posts" className="view-more">
          查看更多
        </Link>
      </div>

      <Row gutter={[16, 24]}>
        {posts.map((post) => (
          <Col key={post.id} xs={24} sm={12} md={8} lg={6}>
            <PostCard post={post} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
