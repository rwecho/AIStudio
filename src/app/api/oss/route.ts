import { getAliyunFileUrl } from "@/lib/aliyun";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const ossKey = searchParams.get("ossKey");

  if (!ossKey) {
    return NextResponse.json({ error: "ossKey is required" }, { status: 400 });
  }
  const url = await getAliyunFileUrl(ossKey);
  return NextResponse.redirect(url, 302);
}
