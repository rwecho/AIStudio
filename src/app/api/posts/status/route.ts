import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// 更新文章状态
export async function PATCH(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "文章ID是必需的" }, { status: 400 });
    }

    const body = await request.json();

    // 检查请求中是否包含有效的状态字段
    const validStatusFields = [
      "status",
      "isApproved",
      "isCleaned",
      "hasCoverImage",
      "coverImage",
    ];

    const updateData: any = {};
    let hasValidField = false;

    validStatusFields.forEach((field) => {
      if (body[field] !== undefined) {
        updateData[field] = body[field];
        hasValidField = true;
      }
    });

    if (!hasValidField) {
      return NextResponse.json(
        { error: "至少需要提供一个有效的状态字段" },
        { status: 400 }
      );
    }

    const post = await prisma.post.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json({ post });
  } catch (error) {
    return NextResponse.json(
      { error: "更新文章状态失败", details: error },
      { status: 500 }
    );
  }
}
