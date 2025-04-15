import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/services/prisma";

interface ArticleInput {
  cn: {
    title: string;
    summary: string;
    content: string;
    cover_prompt: string;
    cover: string;
    categories: [string];
    keywords: [string];
    mediaFiles: [string];
    references: [
      {
        caption: string;
        url: string;
      }
    ];
  };
  en: {
    title: string;
    summary: string;
    content: string;
    cover_prompt: string;
    cover: string;
    categories: [string];
    keywords: [string];
    mediaFiles: [string];
    references: [
      {
        caption: string;
        url: string;
      }
    ];
  };
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const data = (await request.json()) as ArticleInput;

  // 检查草稿是否存在
  const draft = await prisma.draft.findUnique({
    where: { id },
  });

  if (!draft) {
    return NextResponse.json({ error: "草稿不存在" }, { status: 404 });
  }

  const article = await prisma.article.create({
    data: {
      author: draft.author || "",
      status: "PENDING",
      createdAt: new Date(),
      translations: {
        create: [
          {
            lang: "cn",
            title: data.cn.title,
            summary: data.cn.summary,
            content: data.cn.content,
            coverPrompt: data.cn.cover_prompt,
            cover: data.cn.cover,
            categories: data.cn.categories,
            keywords: data.cn.keywords,
            mediaFiles: data.cn.mediaFiles,
            references: {
              createMany: {
                data: data.cn.references,
              },
            },
          },
          {
            lang: "en",
            title: data.en.title,
            summary: data.en.summary,
            content: data.en.content,
            coverPrompt: data.en.cover_prompt,
            cover: data.en.cover,
            categories: data.en.categories,
            keywords: data.en.keywords,
            mediaFiles: data.en.mediaFiles,
            references: {
              createMany: {
                data: data.en.references,
              },
            },
          },
        ],
      },
    },
  });

  // 更新草稿
  await prisma.draft.update({
    where: { id },
    data: {
      isDeleted: true,
      updatedAt: new Date(),
    },
  });
  return NextResponse.json(article, { status: 200 });
}
