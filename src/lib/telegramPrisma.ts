import { PrismaClient } from "@telegram/prisma/client";

let prisma: PrismaClient;

interface global {
  telegramPrisma: PrismaClient;
}
declare const global: global;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.telegramPrisma) {
    global.telegramPrisma = new PrismaClient();
  }
  prisma = global.telegramPrisma;
}

export default prisma;
