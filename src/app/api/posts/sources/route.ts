import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    // 使用Prisma的findMany和distinct来获取不重复的source值
    const sources = await prisma.post.findMany({
      select: {
        source: true,
      },
      where: {
        source: {
          not: null,
        },
      },
      distinct: ["source"],
      orderBy: {
        source: "asc",
      },
    });

    // 提取source字段值并过滤掉空值
    const sourceList = sources.map((item) => item.source).filter(Boolean);

    return NextResponse.json({
      sources: sourceList,
      total: sourceList.length,
    });
  } catch (error) {
    console.error("获取来源列表失败:", error);
    return NextResponse.json({ error: "获取来源列表失败" }, { status: 500 });
  }
}
