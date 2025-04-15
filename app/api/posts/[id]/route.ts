import prisma from "@/app/services/prisma";
import { NextResponse } from "next/server";

// 获取单篇文章详情
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const url = new URL(req.url);
    const lang = url.searchParams.get("lang") || "cn"; // 默认获取中文内容

    // 获取文章详情，包括指定语言的翻译
    const article = await prisma.article.findUnique({
      where: { id },
      include: {
        translations: {
          where: { lang },
          include: {
            references: true, // 包含参考文献
          },
        },
        wechatPublish: true, // 包含微信发布状态
      },
    });

    if (!article) {
      return NextResponse.json({ error: "文章不存在" }, { status: 404 });
    }

    // 增加文章阅读量
    await prisma.article.update({
      where: { id },
      data: { views: { increment: 1 } },
    });

    return NextResponse.json(article);
  } catch (error) {
    console.error("获取文章详情失败:", error);
    return NextResponse.json({ error: "获取文章详情失败" }, { status: 500 });
  }
}
