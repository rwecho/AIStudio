import prisma from "@/lib/prisma";
import PostCard from "@/components/ui/PostCard";
import { Card, Row, Col, Select, Input } from "antd";
import { Pagination } from "antd";
import PostRow from "@/components/ui/PostRow";

interface SearchParams {
  page?: string;
  pageSize?: string;
  category?: string;
  sort?: string;
  search?: string;
}

export default async function PostsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const page = Number(searchParams.page) || 1;
  const pageSize = Number(searchParams.pageSize) || 12;
  const search = searchParams.search || "";

  const where = {
    ...(search
      ? {
          OR: [
            { title: { contains: search, mode: "insensitive" } },
            { content: { contains: search, mode: "insensitive" } },
          ],
        }
      : {}),
  };

  const posts = await prisma.post.findMany({
    // where,
    take: pageSize,
    skip: (page - 1) * pageSize,
    orderBy: {
      published: "desc",
    },
    include: {
      //   category: true,
    },
  });

  const total = await prisma.post.count({
    // where
  });

  //   const categories = await prisma.category.findMany();

  return (
    <div className="content">
      <Col>
        {posts.map((post) => (
          <Row key={post.id} style={{ marginBottom: "16px" }}>
            <PostRow post={post} />
          </Row>
        ))}
      </Col>
    </div>
  );
}
