import prisma from "@/lib/prisma";
import PostCard from "@/components/ui/PostCard";
import { Card, Row, Col, Select, Input } from "antd";
import { Pagination } from "antd";

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
    <div className="max-w-7xl mx-auto py-8 px-4">
      <Card className="mb-6">
        <div className="flex gap-4 mb-4">
          {/* <Input.Search placeholder="搜索文章" style={{ width: 300 }} /> */}
          {/* <Select
            placeholder="选择分类"
            style={{ width: 200 }}
            options={categories.map((c) => ({
              label: c.name,
              value: c.id,
            }))}
          /> */}
        </div>
      </Card>

      <Row gutter={[16, 16]}>
        {posts.map((post) => (
          <Col xs={24} sm={12} md={8} lg={6} key={post.id}>
            <PostCard post={post} />
          </Col>
        ))}
      </Row>

      <div className="mt-8 flex justify-center">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={total}
          showSizeChanger
        />
      </div>
    </div>
  );
}
