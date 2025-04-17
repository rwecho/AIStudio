import React from "react";
import prisma from "../services/prisma";
import { readableDate } from "../services/dateutils";

export const dynamic = "force-dynamic"; // 强制页面动态渲染

export default async function DraftsPage() {
  // 服务器端获取文章数据
  const top = 50;
  const drafts = await prisma.draft.findMany({
    where: {
      // status: "PUBLISHED", // 只获取已发布的文章
    },
    take: top, // 默认获取50条
    orderBy: {
      createdAt: "desc", // 按发布时间倒序
    },
  });

  const count = await prisma.draft.count({
    where: {
      // status: "PUBLISHED",
    },
  });
  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">草稿列表（共 {count} 篇）</h1>
      <ul className="space-y-4">
        {drafts.map((draft: any) => (
          <li key={draft.id} className="border rounded p-4">
            {draft.data?.title && (
              <div className="font-semibold text-lg">{draft.data?.title}</div>
            )}

            <div className="text-sm text-gray-500 mt-1">
              作者：{draft.author || "未知"} &nbsp;| 更新时间：
              {readableDate(draft.updatedAt)}
            </div>
            {draft.data?.content && (
              <div className="mt-2 text-gray-700 line-clamp-6">
                {draft.data?.content}
              </div>
            )}

            {draft.isDeleted && <div className="mt-2 text-red-500">已删除</div>}
          </li>
        ))}
      </ul>
    </main>
  );
}
