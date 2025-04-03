import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// 增加文章浏览量
export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "文章ID是必需的" }, { status: 400 });
    }

    const post = await prisma.post.update({
      where: { id },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    return NextResponse.json({ views: post.views });
  } catch (error) {
    return NextResponse.json(
      { error: "更新浏览量失败", details: error },
      { status: 500 }
    );
  }
}
