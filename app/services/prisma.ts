import { PrismaClient } from "../generated/client";

import "server-only";
let prisma: PrismaClient;

interface global {
  prisma: PrismaClient;
}
declare const global: global;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
