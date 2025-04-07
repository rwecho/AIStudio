import { NextRequest, NextResponse } from "next/server";
import { Readability } from "@mozilla/readability";
import { JSDOM } from "jsdom";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // 获取目标网页内容
    const response = await fetch(url);
    const html = await response.text();

    // 使用JSDOM解析HTML
    const doc = new JSDOM(html, {
      url: url,
      referrer: response.url,
      contentType: "text/html",
      includeNodeLocations: true,
      storageQuota: 10000000,
    });

    const reader = new Readability(doc.window.document);
    const article = reader.parse();

    if (!article) {
      return NextResponse.json(
        { error: "Could not parse article content" },
        { status: 422 }
      );
    }
    return NextResponse.json({ data: article });
  } catch (error) {
    console.error("Error processing URL:", error);
    return NextResponse.json(
      { error: "Failed to process URL" },
      { status: 500 }
    );
  }
}
