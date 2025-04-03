import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// 增加文章点赞数
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
        likes: {
          increment: 1,
        },
      },
    });

    return NextResponse.json({ likes: post.likes });
  } catch (error) {
    return NextResponse.json(
      { error: "更新点赞失败", details: error },
      { status: 500 }
    );
  }
}

// 取消文章点赞
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "文章ID是必需的" }, { status: 400 });
    }

    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (!post || post.likes <= 0) {
      return NextResponse.json({ error: "无法减少点赞数" }, { status: 400 });
    }

    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        likes: {
          decrement: 1,
        },
      },
    });

    return NextResponse.json({ likes: updatedPost.likes });
  } catch (error) {
    return NextResponse.json(
      { error: "取消点赞失败", details: error },
      { status: 500 }
    );
  }
}
