import { ArticleStatus, WechatPublishStatus } from "@/app/generated/client";
import { deleteFromAliyun } from "@/app/services/aliyun";
import prisma from "@/app/services/prisma";
import { NextResponse } from "next/server";

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
  const author = getParamCaseInsensitive(searchParams, "author");
  const authors = getParamCaseInsensitive(searchParams, "authors");
  const lang = getParamCaseInsensitive(searchParams, "lang") || "cn"; // 默认中文
  const wechatStatus = getParamCaseInsensitive(searchParams, "wechatStatus");
  const includeWechatPublish = getParamCaseInsensitive(
    searchParams,
    "includeWechatPublish"
  );

  // 构建查询条件
  const where = {} as {
    publishedAt?: {
      gte?: Date;
      lte?: Date;
    };
    translations?: {
      some: {
        lang: string;
        OR?: Array<{
          title?: { contains: string; mode: "insensitive" };
          content?: { contains: string; mode: "insensitive" };
        }>;
      };
    };
    author?: string | { in: string[] };
    status?: ArticleStatus;
    wechatPublish?:
      | {
          status?: WechatPublishStatus;
        }
      | {
          is?: null;
        };
  };

  // 添加时间范围筛选
  if (startTime) {
    where.publishedAt = {
      gte: new Date(startTime),
    };
  }

  if (endTime) {
    where.publishedAt = where.publishedAt || {};
    where.publishedAt.lte = new Date(endTime);
  }

  // 添加多语言文本搜索
  if (search) {
    where.translations = {
      some: {
        lang,
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { content: { contains: search, mode: "insensitive" } },
        ],
      },
    };
  }
  if (lang) {
    // 指定语言筛选但没有搜索条件
    where.translations = {
      some: {
        lang,
      },
    };
  }

  if (author) {
    where.author = author;
  }

  if (authors) {
    const authorsArray = authors.split(",");
    where.author = {
      in: authorsArray,
    };
  }

  if (status) {
    // 添加状态筛选
    const statusUpper = status.toUpperCase();
    // 检查状态是否是有效的 ArticleStatus 枚举值
    if (Object.values(ArticleStatus).includes(statusUpper as ArticleStatus)) {
      where.status = statusUpper as ArticleStatus;
    } else if (statusUpper === "ALL") {
      // "ALL" 状态不添加筛选条件
    } else {
      console.warn(`未知的状态值: ${status}`);
    }
  }

  // 添加微信发布状态筛选
  if (wechatStatus) {
    const wechatStatusUpper = wechatStatus.toUpperCase();
    if (wechatStatusUpper === "NULL") {
      // 查询未发布到微信的文章
      where.wechatPublish = {
        is: null,
      };
    } else if (
      Object.values(WechatPublishStatus).includes(
        wechatStatusUpper as WechatPublishStatus
      )
    ) {
      where.wechatPublish = {
        status: wechatStatusUpper as WechatPublishStatus,
      };
    }
  }

  // 查询文章列表
  const articles = await prisma.article.findMany({
    where,
    include: {
      translations: true,
      wechatPublish: includeWechatPublish === "true", // 包含微信发布状态
    },
    take: pageSize,
    skip: (page - 1) * pageSize,
    orderBy: {
      publishedAt: "desc",
    },
  });

  const total = await prisma.article.count({ where });

  return NextResponse.json({
    items: [
      // exclude other languages
      ...articles.map((article) => ({
        ...article,
        translations: article.translations.filter(
          (translation) => translation.lang === lang
        ),
      })),
    ],
    total,
    hasMore: page * pageSize < total,
  });
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
    const existingArticle = await prisma.article.findUnique({
      where: { id },
      include: {
        translations: true,
      },
    });

    if (!existingArticle) {
      return NextResponse.json({ error: "文章不存在" }, { status: 404 });
    }

    // 如果有封面图片，可以在这里删除相关资源
    for (const translation of existingArticle.translations) {
      if (translation.cover) {
        try {
          await deleteFromAliyun(translation.cover);
        } catch (err) {
          console.error(`删除封面图片 ${translation.cover} 失败:`, err);
          // 继续处理其他资源，不中断流程
        }
      }
    }

    // 删除文章 (Prisma 级联删除会自动删除关联的翻译和引用)
    await prisma.article.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "文章已成功删除" });
  } catch (error) {
    console.error("删除文章失败:", error);
    return NextResponse.json({ error: "删除文章失败" }, { status: 500 });
  }
}
