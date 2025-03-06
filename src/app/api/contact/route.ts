import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        message: "All fields are required",
      },
      { status: 400 }
    );
  }

  const comment = await prisma.comments.create({
    data: {
      authorName: name,
      authorEmail: email,
      message,
    },
  });

  return NextResponse.json({
    message: "Message sent successfully",
    comment,
  });
}
