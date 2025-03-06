import { NextRequest, NextResponse } from "next/server";
import { getSites } from "./sites";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const catalog = url.searchParams.get("catalog");
  const filter = url.searchParams.get("filter");

  const sites = await getSites(catalog, filter);

  return NextResponse.json(sites);
}

export async function POST(request: NextRequest) {
  const site: Site = await request.json();

  return NextResponse.json({
    message: "Site created successfully",
    data: site,
  });
}
