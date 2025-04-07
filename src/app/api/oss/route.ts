import { getAliyunFileUrl } from "@/lib/aliyun";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { NextResponse } from "next/server";

// 设置CORS头部的辅助函数
function setCorsHeaders(response: NextResponse, headerList: ReadonlyHeaders) {
  const origin = headerList.get("origin") || headerList.get("referer") || "*";
  const modifiedOrigin = origin.endsWith("/") ? origin.slice(0, -1) : origin;
  console.log("origin", modifiedOrigin);

  // 更新CORS头部
  response.headers.set("Access-Control-Allow-Origin", modifiedOrigin);
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  response.headers.set("Access-Control-Allow-Credentials", "true");
  if (origin !== "*") {
    response.headers.set("Vary", "Origin");
  }

  return response;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const ossKey = searchParams.get("ossKey");

  if (!ossKey) {
    return NextResponse.json({ error: "ossKey is required" }, { status: 400 });
  }

  const url = await getAliyunFileUrl(ossKey);

  // 请求目标 URL
  const response = await fetch(url, {
    method: "GET",
  });

  // 获取原始响应的内容类型
  const contentType =
    response.headers.get("content-type") || "application/octet-stream";

  // 读取响应体为 ArrayBuffer
  const data = await response.arrayBuffer();
  return setCorsHeaders(
    new NextResponse(data, {
      headers: {
        "content-type": contentType,
        "cache-control": "public, max-age=86400",
      },
    }),
    request.headers
  );
}
