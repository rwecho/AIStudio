import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { PostStatus } from "@prisma/client";
import { uploadToAliyun, deleteFromAliyun } from "@/lib/aliyun";
import { v5 } from "uuid";

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
  const source = getParamCaseInsensitive(searchParams, "source");

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
    source?: string;
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
  console.log("source", source);

  if (source) {
    where.source = source;
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

  for (const post of posts) {
    if (post.formattedContent) {
      post.content = post.formattedContent;
    }
  }

  return NextResponse.json({
    posts,
    total,
    hasMore: page * pageSize < total,
  });
}

// 创建新文章
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const link = formData.get("link") as string;

    // 确保必填字段存在
    if (!title && !content) {
      return NextResponse.json(
        { error: "标题或内容不能为空" },
        { status: 400 }
      );
    }

    // 处理媒体文件
    const mediaFiles = (formData.getAll("files") || []) as File[];

    const ossKeys = [];

    // 上传 媒体文件到阿里云
    for (const mediaFile of mediaFiles) {
      const file = mediaFile as File;
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      // 上传到阿里云
      const fullUuid = v5(link, v5.URL);
      const uuid = fullUuid.substring(0, 8);
      const filePath = `${uuid}/${file.name}`;
      const ossKey = await uploadToAliyun(fileBuffer, filePath);
      ossKeys.push(ossKey);
    }

    // 创建新文章
    const post = await prisma.post.create({
      data: {
        title: title,
        link: (formData.get("link") as string) || "",
        content: content,
        source: (formData.get("source") as string) || "",
        author: (formData.get("author") as string) || "",
        published: formData.get("published")
          ? new Date(formData.get("published") as string)
          : null,
        status: PostStatus.DRAFT,
        hasCoverImage: !!formData.get("coverImage"),
        coverImage: (formData.get("coverImage") as string) || null,
        mediaFiles: ossKeys,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("创建文章失败:", error);
    return NextResponse.json({ error: "创建文章失败" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const input = await request.json();
    const id = input.id as string;

    // 确保提供了ID
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

    // 更新文章
    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        title: (input.title as string) || existingPost.title,
        content: (input.content as string) || existingPost.content,
        source: (input.source as string) || existingPost.source,
        author: (input.author as string) || existingPost.author,
        formattedTitle:
          (input.formattedTitle as string) || existingPost.formattedTitle,
        formattedContent:
          (input.formattedContent as string) || existingPost.formattedContent,
        keywords: input.keywords
          ? JSON.parse(input.keywords as string)
          : existingPost.keywords,
        sourceUrls: input.sourceUrls
          ? JSON.parse(input.sourceUrls as string)
          : existingPost.sourceUrls,
        coverImage: (input.coverImage as string) || existingPost.coverImage,
        hasCoverImage: input.coverImage
          ? !!input.coverImage
          : existingPost.hasCoverImage,
        published: input.published
          ? new Date(input.published as string)
          : existingPost.published,
        status: input.status
          ? ((input.status as string).toUpperCase() as PostStatus)
          : existingPost.status,
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

    // 检查文章是否存在，并获取关联的媒体文件
    const existingPost = await prisma.post.findUnique({
      where: { id },
    });

    if (!existingPost) {
      return NextResponse.json({ error: "文章不存在" }, { status: 404 });
    }

    // 从阿里云删除相关媒体文件
    for (const mediaFile of existingPost.mediaFiles) {
      try {
        await deleteFromAliyun(mediaFile);
      } catch (err) {
        console.error(`删除文件 ${mediaFile} 失败:`, err);
        // 继续处理其他文件，不中断流程
      }
    }

    // 删除文章 (Prisma 级联删除会自动删除关联的 mediaFiles 记录)
    await prisma.post.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "文章已成功删除" });
  } catch (error) {
    console.error("删除文章失败:", error);
    return NextResponse.json({ error: "删除文章失败" }, { status: 500 });
  }
}
