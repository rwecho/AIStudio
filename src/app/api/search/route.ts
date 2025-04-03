import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");
    const page = Number(searchParams.get("page")) || 1;
    const pageSize = Number(searchParams.get("pageSize")) || 10;

    if (!query) {
      return NextResponse.json({ error: "搜索词是必需的" }, { status: 400 });
    }

    // 构建搜索查询
    const where = {
      OR: [
        { title: { contains: query, mode: "insensitive" } },
        { content: { contains: query, mode: "insensitive" } },
        { tags: { some: { name: { contains: query, mode: "insensitive" } } } },
      ],
    };

    // 执行搜索查询和计数
    const [posts, totalCount] = await Promise.all([
      prisma.post.findMany({
        where,
        take: pageSize,
        skip: (page - 1) * pageSize,
        orderBy: [{ published: "desc" }, { createdAt: "desc" }],
        include: {
          tags: true,
        },
      }),
      prisma.post.count({ where }),
    ]);

    // 计算分页信息
    const totalPages = Math.ceil(totalCount / pageSize);

    return NextResponse.json({
      posts,
      pagination: {
        page,
        pageSize,
        totalCount,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    console.error("搜索失败:", error);
    return NextResponse.json(
      { error: "搜索失败", details: error },
      { status: 500 }
    );
  }
}
