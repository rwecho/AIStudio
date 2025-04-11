import { WechatPublishStatus } from "@/app/generated/client";
import prisma from "@/app/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // 获取请求数据
    const input = await request.json();
    const postId = input.postId || input.id; // 兼容两种格式的请求
    
    if (!postId) {
      return NextResponse.json(
        { error: "缺少必要的文章ID" },
        { status: 400 }
      );
    }
    
    // 检查文章是否存在
    const post = await prisma.post.findUnique({
      where: { id: postId },
      include: { wechatPublish: true }
    });
    
    if (!post) {
      return NextResponse.json(
        { error: "文章不存在" },
        { status: 404 }
      );
    }
    
    // 检查是否已经存在发布记录
    if (post.wechatPublish?.status === WechatPublishStatus.PUBLISHED) {
      return NextResponse.json(
        { error: "文章已发布到公众号" },
        { status: 400 }
      );
    }

    // 处理内容，使用文章的格式化内容或原始内容
    const content = post.formattedContent || post.content;
    
    console.log(`准备发布文章《${post.title}》到公众号，ID: ${postId}`);
    
    // 创建或更新发布记录
    const wechatPublish = await prisma.wechatPublish.upsert({
      where: { postId: postId },
      create: {
        postId: postId,
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
      data: wechatPublish
    });
  } catch (error) {
    console.error("发布到公众号失败:", error);
    return NextResponse.json({ error: "发布到公众号失败" }, { status: 500 });
  }
}
