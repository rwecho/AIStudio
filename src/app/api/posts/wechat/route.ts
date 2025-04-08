import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { WechatPublishStatus } from "@prisma/client";

export async function POST(request: NextRequest) {
  try {
    const input = (await request.json()) as {
      id: string;
      content: string;
      title: string;
      cover: string;
      source: string | undefined;
    };

    const { id, content } = input;

    // 检查是否已经存在发布记录
    const existingPublish = await prisma.wechatPublish.findUnique({
      where: { postId: id },
    });

    if (existingPublish?.status === WechatPublishStatus.PUBLISHED) {
      return NextResponse.json(
        { error: "文章已发布到公众号" },
        { status: 400 }
      );
    }

    console.log("发布到公众号", input);

    // 创建或更新发布记录（成功状态）
    const wechatPublish = await prisma.wechatPublish.upsert({
      where: { postId: id },
      create: {
        postId: id,
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

    return NextResponse.json(wechatPublish);
  } catch (error) {
    console.error("发布到公众号失败:", error);
    return NextResponse.json({ error: "发布到公众号失败" }, { status: 500 });
  }
}
