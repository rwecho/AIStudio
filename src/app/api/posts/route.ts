import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { PostStatus } from "@prisma/client";

// 辅助函数：不区分大小写获取URL参数
function getParamCaseInsensitive(
  params: URLSearchParams,
  key: string
): string | null {
  // 直接尝试获取原始key
  const directValue = params.get(key);
  if (directValue !== null) return directValue;

  // 转换key为小写后比较
  const keyLower = key.toLowerCase();

  // 遍历所有参数名，查找不区分大小写的匹配
  for (const [paramKey] of params.entries()) {
    if (paramKey.toLowerCase() === keyLower) {
      return params.get(paramKey);
    }
  }

  return null;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;

  // 使用不区分大小写的函数获取参数
  const page = Number(getParamCaseInsensitive(searchParams, "page")) || 1;
  const pageSize =
    Number(getParamCaseInsensitive(searchParams, "pageSize")) || 10;
  const startTime = getParamCaseInsensitive(searchParams, "startTime");
  const endTime = getParamCaseInsensitive(searchParams, "endTime");
  const search = getParamCaseInsensitive(searchParams, "search");
  const status = getParamCaseInsensitive(searchParams, "status");

  // 构建查询条件
  const where = {} as {
    published?: {
      gte?: Date;
      lte?: Date;
    };
    OR?: Array<{
      title?: { contains: string; mode: "insensitive" };
      content?: { contains: string; mode: "insensitive" };
      source?: { contains: string; mode: "insensitive" };
      author?: { contains: string; mode: "insensitive" };
    }>;
    status?: PostStatus;
  };

  // 添加时间范围筛选
  if (startTime) {
    where.published = {
      gte: new Date(startTime),
    };
  }

  if (endTime) {
    where.published = where.published || {};
    where.published.lte = new Date(endTime);
  }

  // 添加文本搜索（已经是不区分大小写的）
  if (search) {
    where.OR = [
      { title: { contains: search, mode: "insensitive" } },
      { content: { contains: search, mode: "insensitive" } },
      { source: { contains: search, mode: "insensitive" } },
      { author: { contains: search, mode: "insensitive" } },
    ];
  }

  // 添加状态筛选
  if (status) {
    const statusUpper = status.toUpperCase();
    // 检查状态是否是有效的 PostStatus 枚举值
    if (Object.values(PostStatus).includes(statusUpper as PostStatus)) {
      where.status = statusUpper as PostStatus;
    } else if (statusUpper === "ALL") {
      // "ALL" 状态不添加筛选条件
    } else {
      console.warn(`未知的状态值: ${status}`);
    }
  }

  const posts = await prisma.post.findMany({
    where,
    take: pageSize,
    skip: (page - 1) * pageSize,
    orderBy: {
      published: "desc",
    },
  });

  const total = await prisma.post.count({ where });

  return NextResponse.json({
    posts,
    total,
    hasMore: page * pageSize < total,
  });
}

// 创建新文章
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 确保必填字段存在
    if (!body.title) {
      return NextResponse.json({ error: "标题不能为空" }, { status: 400 });
    }

    debugger;
    // 创建新文章
    const post = await prisma.post.create({
      data: {
        title: body.title,
        link: body.link || "",
        content: body.description || "",
        source: body.source || "",
        author: body.author || "",
        published: body.published ? new Date(body.published) : new Date(),
        status: body.status
          ? (body.status.toUpperCase() as PostStatus)
          : PostStatus.DRAFT,
        // 如果有其他字段，可以在这里添加
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("创建文章失败:", error);
    return NextResponse.json({ error: "创建文章失败" }, { status: 500 });
  }
}

// 更新文章
export async function PUT(request: Request) {
  try {
    const body = await request.json();

    // 确保提供了ID
    if (!body.id) {
      return NextResponse.json({ error: "必须提供文章ID" }, { status: 400 });
    }

    // 检查文章是否存在
    const existingPost = await prisma.post.findUnique({
      where: { id: body.id },
    });

    if (!existingPost) {
      return NextResponse.json({ error: "文章不存在" }, { status: 404 });
    }

    // 更新文章
    const updatedPost = await prisma.post.update({
      where: { id: body.id },
      data: {
        title: body.title !== undefined ? body.title : existingPost.title,
        content:
          body.content !== undefined ? body.content : existingPost.content,
        source: body.source !== undefined ? body.source : existingPost.source,
        author: body.author !== undefined ? body.author : existingPost.author,
        formattedTitle:
          body.formattedTitle !== undefined
            ? body.formattedTitle
            : existingPost.formattedTitle,
        formattedContent:
          body.formattedContent !== undefined
            ? body.formattedContent
            : existingPost.formattedContent,
        keywords: body.keywords ? body.keywords : existingPost.keywords,
        sourceUrls: body.sourceUrls ? body.sourceUrls : existingPost.sourceUrls,
        coverImage: body.coverImage,
        published: body.published
          ? new Date(body.published)
          : existingPost.published,
        status: body.status
          ? (body.status.toUpperCase() as PostStatus)
          : existingPost.status,
        // 如果有其他字段，可以在这里添加
      },
    });

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error("更新文章失败:", error);
    return NextResponse.json({ error: "更新文章失败" }, { status: 500 });
  }
}

// 删除文章
export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "必须提供文章ID" }, { status: 400 });
    }

    // 检查文章是否存在
    const existingPost = await prisma.post.findUnique({
      where: { id },
    });

    if (!existingPost) {
      return NextResponse.json({ error: "文章不存在" }, { status: 404 });
    }

    // 删除文章
    await prisma.post.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "文章已成功删除" });
  } catch (error) {
    console.error("删除文章失败:", error);
    return NextResponse.json({ error: "删除文章失败" }, { status: 500 });
  }
}
