// filepath: /Volumes/MacMiniDisk/Users/echo/workspace/AIStudio/app/api/drafts/route.ts
import { uploadToAliyun } from "@/app/services/aliyun";
import prisma from "@/app/services/prisma";
import { NextResponse } from "next/server";
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

// 获取草稿列表
export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;

  // 使用不区分大小写的函数获取参数
  const page = Number(getParamCaseInsensitive(searchParams, "page")) || 1;
  const pageSize =
    Number(getParamCaseInsensitive(searchParams, "pageSize")) || 10;
  const author = getParamCaseInsensitive(searchParams, "author");

  // 构建查询条件
  const where = {} as {
    author?: string;
  };

  if (author) {
    where.author = author;
  }

  // 查询草稿列表
  const drafts = await prisma.draft.findMany({
    where,
    take: pageSize,
    skip: (page - 1) * pageSize,
    orderBy: {
      updatedAt: "desc",
    },
  });

  const total = await prisma.draft.count({ where });

  return NextResponse.json({
    items: drafts,
    total,
    hasMore: page * pageSize < total,
  });
}

// 创建新草稿
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const title = formData.get("title")?.toString();
    const content = formData.get("content")?.toString();
    const source = formData.get("source")?.toString();
    const author = formData.get("author")?.toString();
    const publishedAt = formData.get("published")?.toString();
    const link = formData.get("link")?.toString();

    // 处理媒体文件
    const mediaFiles = (formData.getAll("files") || []) as File[];

    const ossKeys = [];

    // 上传 媒体文件到阿里云
    for (const mediaFile of mediaFiles) {
      const file = mediaFile as File;
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      // 上传到阿里云
      const fullUuid = link ? v5(link, v5.URL) : v5(file.name, v5.DNS);
      const uuid = fullUuid.substring(0, 8);
      const filePath = `${uuid}/${file.name}`;
      const ossKey = (await uploadToAliyun(fileBuffer, filePath)).filePath;
      ossKeys.push(ossKey);
    }

    // 创建草稿
    const draft = await prisma.draft.create({
      data: {
        author: author || "",
        data: {
          title,
          content,
          summary: source,
          publishedAt,
          link,
          mediaFiles: ossKeys, // 存储上传的媒体文件的OSS键
        }, // 存储完整的 JSON 数据
      },
    });

    return NextResponse.json(draft, { status: 201 });
  } catch (error) {
    console.error("创建草稿失败:", error);
    return NextResponse.json({ error: "创建草稿失败" }, { status: 500 });
  }
}

// 更新草稿
export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const id = data.id;

    if (!id) {
      return NextResponse.json({ error: "必须提供草稿ID" }, { status: 400 });
    }

    // 检查草稿是否存在
    const existingDraft = await prisma.draft.findUnique({
      where: { id },
    });

    if (!existingDraft) {
      return NextResponse.json({ error: "草稿不存在" }, { status: 404 });
    }

    // 更新草稿
    const updatedDraft = await prisma.draft.update({
      where: { id },
      data: {
        author: data.author || existingDraft.author,
        data: data, // 存储完整的 JSON 数据
      },
    });

    return NextResponse.json(updatedDraft);
  } catch (error) {
    console.error("更新草稿失败:", error);
    return NextResponse.json({ error: "更新草稿失败" }, { status: 500 });
  }
}

// 将草稿转换为文章
export async function PATCH(request: Request) {
  try {
    const { id, lang = "cn" } = await request.json();

    if (!id) {
      return NextResponse.json({ error: "必须提供草稿ID" }, { status: 400 });
    }

    // 查找草稿
    const draft = await prisma.draft.findUnique({
      where: { id },
    });

    if (!draft) {
      return NextResponse.json({ error: "草稿不存在" }, { status: 404 });
    }

    // 从草稿数据中提取需要的字段
    const draftData = draft.data as any;

    // 创建新文章及其翻译内容
    const article = await prisma.article.create({
      data: {
        author: draft.author || "",
        status: "DRAFT", // 默认为草稿状态
        translations: {
          create: [
            {
              lang,
              title: draftData.title || "",
              content: draftData.content || "",
              summary: draftData.summary || "",
              coverPrompt: draftData.coverPrompt || "",
              cover: draftData.cover || "",
              categories: draftData.categories || [],
              keywords: draftData.keywords || [],
            },
          ],
        },
      },
      include: {
        translations: true,
      },
    });

    // 可选：删除已转换的草稿
    // await prisma.draft.delete({ where: { id } });

    return NextResponse.json({
      message: "草稿已成功转换为文章",
      article,
    });
  } catch (error) {
    console.error("转换草稿失败:", error);
    return NextResponse.json({ error: "转换草稿失败" }, { status: 500 });
  }
}

// 删除草稿
export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "必须提供草稿ID" }, { status: 400 });
    }

    // 检查草稿是否存在
    const existingDraft = await prisma.draft.findUnique({
      where: { id },
    });

    if (!existingDraft) {
      return NextResponse.json({ error: "草稿不存在" }, { status: 404 });
    }

    // 删除草稿
    await prisma.draft.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "草稿已成功删除" });
  } catch (error) {
    console.error("删除草稿失败:", error);
    return NextResponse.json({ error: "删除草稿失败" }, { status: 500 });
  }
}
