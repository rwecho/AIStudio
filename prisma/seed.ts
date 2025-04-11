import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

async function main() {
  console.log("数据库初始化完成");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
