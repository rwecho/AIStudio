import { WechatPublishStatus } from "@/app/generated/client";
import prisma from "@/app/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // 获取请求数据
    const input = await request.json();
    const articleId = input.articleId || input.id; // 兼容两种格式的请求
    const lang = input.lang || "cn"; // 默认使用中文内容发布

    if (!articleId) {
      return NextResponse.json({ error: "缺少必要的文章ID" }, { status: 400 });
    }

    // 检查文章是否存在，并获取指定语言的翻译
    const article = await prisma.article.findUnique({
      where: { id: articleId },
      include: {
        translations: {
          where: { lang },
        },
        wechatPublish: true,
      },
    });

    if (!article) {
      return NextResponse.json({ error: "文章不存在" }, { status: 404 });
    }

    // 检查是否存在指定语言的翻译
    if (!article.translations || article.translations.length === 0) {
      return NextResponse.json(
        { error: `不存在${lang}语言的翻译内容` },
        { status: 404 }
      );
    }

    // 检查是否已经存在发布记录
    if (article.wechatPublish?.status === WechatPublishStatus.PUBLISHED) {
      return NextResponse.json(
        { error: "文章已发布到公众号" },
        { status: 400 }
      );
    }

    // 获取翻译内容
    const translation = article.translations[0];
    const content = translation.content;
    const title = translation.title;

    console.log(`准备发布文章《${title}》到公众号，ID: ${articleId}`);

    // 创建或更新发布记录
    const wechatPublish = await prisma.wechatPublish.upsert({
      where: { articleId },
      create: {
        articleId,
        content: content,
        status: WechatPublishStatus.PENDING,
      },
      update: {
        content: content,
        status: WechatPublishStatus.PENDING,
        error: null, // 清除之前的错误信息
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      message: "文章已加入公众号发布队列",
      data: wechatPublish,
    });
  } catch (error) {
    console.error("发布到公众号失败:", error);
    return NextResponse.json({ error: "发布到公众号失败" }, { status: 500 });
  }
}
