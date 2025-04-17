import prisma from "@/app/services/prisma";
import { NextResponse } from "next/server";

// 删除草稿
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;

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
    await prisma.draft.update({
      where: { id },
      data: {
        isDeleted: true,
      },
    });
    return NextResponse.json({ success: true, message: "草稿已成功删除" });
  } catch (error) {
    console.error("删除草稿失败:", error);
    return NextResponse.json({ error: "删除草稿失败" }, { status: 500 });
  }
}
