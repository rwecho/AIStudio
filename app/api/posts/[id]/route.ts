import { WechatPublishStatus } from "@/app/generated/client";
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

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const input = await request.json();
    const id = (await params).id as string;

    // 确保提供了ID
    if (!id) {
      return NextResponse.json({ error: "必须提供文章ID" }, { status: 400 });
    }

    // 检查文章是否存在
    const existingPost = await prisma.article.findUnique({
      where: { id },
      include: {
        wechatPublish: true,
        translations: true,
      },
    });

    if (!existingPost) {
      return NextResponse.json({ error: "文章不存在" }, { status: 404 });
    }

    // 处理微信发布状态更新
    let wechatPublishUpdate;
    if (input.wechatPublish) {
      const wechatPublishInput = input.wechatPublish as {
        status?: WechatPublishStatus;
        content?: string;
        error?: string | null;
        mediaId?: string;
        publishId?: string;
      };

      // 如果状态被设置为 PUBLISHED，确保必要字段存在
      if (wechatPublishInput.status === WechatPublishStatus.PUBLISHED) {
        if (!wechatPublishInput.mediaId || !wechatPublishInput.publishId) {
          return NextResponse.json(
            { error: "发布状态为PUBLISHED时必须提供mediaId和publishId" },
            { status: 400 }
          );
        }
      }

      // 如果状态被设置为 FAILED，确保提供了错误信息
      if (
        wechatPublishInput.status === WechatPublishStatus.FAILED &&
        !wechatPublishInput.error
      ) {
        return NextResponse.json(
          { error: "发布状态为FAILED时必须提供错误信息" },
          { status: 400 }
        );
      }

      wechatPublishUpdate = {
        upsert: {
          create: {
            status: wechatPublishInput.status || WechatPublishStatus.PENDING,
            content:
              wechatPublishInput.content ||
              existingPost.translations[0].content,
            error: wechatPublishInput.error,
            mediaId: wechatPublishInput.mediaId,
            publishId: wechatPublishInput.publishId,
          },
          update: {
            status: wechatPublishInput.status,
            ...(wechatPublishInput.content && {
              content:
                wechatPublishInput.content ||
                existingPost.translations[0].content,
            }),
            ...(wechatPublishInput.error !== undefined && {
              error: wechatPublishInput.error,
            }),
            ...(wechatPublishInput.mediaId && {
              mediaId: wechatPublishInput.mediaId,
            }),
            ...(wechatPublishInput.publishId && {
              publishId: wechatPublishInput.publishId,
            }),
            updatedAt: new Date(),
          },
        },
      };
    }

    // 更新文章
    const updatedPost = await prisma.article.update({
      where: { id },
      data: {
        wechatPublish: wechatPublishUpdate,
        updatedAt: new Date(),
      },
      include: {
        wechatPublish: true,
      },
    });

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error("更新文章失败:", error);
    return NextResponse.json({ error: "更新文章失败" }, { status: 500 });
  }
}
