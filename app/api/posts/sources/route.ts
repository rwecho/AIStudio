import prisma from "@/app/services/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 使用Prisma的findMany和distinct来获取不重复的author值
    const authors = await prisma.article.findMany({
      select: {
        author: true,
      },
      where: {
        author: {
          not: null,
        },
      },
      distinct: ["author"],
      orderBy: {
        author: "asc",
      },
    });

    // 提取author字段值并过滤掉空值
    const authorList = authors.map((item) => item.author).filter(Boolean);

    return NextResponse.json({
      authors: authorList,
      total: authorList.length,
    });
  } catch (error) {
    console.error("获取作者/来源列表失败:", error);
    return NextResponse.json(
      { error: "获取作者/来源列表失败" },
      { status: 500 }
    );
  }
}
