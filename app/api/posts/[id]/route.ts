import prisma from "@/app/services/prisma";
import { NextResponse } from "next/server";
import { formatPost } from "../formatPost";

// 获取单篇文章详情
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;

    // 获取文章详情
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        wechatPublish: true, // 包含微信发布状态
      },
    });

    if (!post) {
      return NextResponse.json({ error: "文章不存在" }, { status: 404 });
    }

    // 增加文章阅读量
    await prisma.post.update({
      where: { id },
      data: { views: { increment: 1 } },
    });

    // 使用格式化内容（如果有）
    if (post.formattedContent) {
      post.content = post.formattedContent;
    }

    return NextResponse.json(formatPost(post));
  } catch (error) {
    console.error("获取文章详情失败:", error);
    return NextResponse.json({ error: "获取文章详情失败" }, { status: 500 });
  }
}
