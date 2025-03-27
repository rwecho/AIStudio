import { PrismaClient } from "@prisma/client";

import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

async function main() {
  const dataPath = "data";

  // 获取所有目录
  const dirPath = path.join(dataPath);

  const files = fs.readdirSync(dirPath);

  for (const folder of files) {
    console.log("正在处理文件夹:", folder);
    const subfolder = path.join(dirPath, folder);

    for (const file of fs.readdirSync(subfolder)) {
      const filePath = path.join(subfolder, file);

      if (!filePath.endsWith(".json")) {
        continue;
      }
      console.log("正在处理文件:", filePath);

      // 读取文件内容
      const data = fs.readFileSync(filePath, "utf-8");

      // 解析 JSON 数据
      const jsonData = JSON.parse(data) as {
        title: string;
        link: string;
        article_id: string;
        published: Date;
        author: string;
        description: string;
        categories: string[];
        source: string;
      };

      console.log("正在插入数据:", jsonData);

      // 插入数据到数据库

      if (
        await prisma.post.findFirst({
          where: {
            link: jsonData.link,
          },
        })
      ) {
        console.log("数据已存在:", jsonData.link);
        continue;
      }
      await prisma.post.create({
        data: {
          title: jsonData.title,
          link: jsonData.link,
          published: jsonData.published,
          author: jsonData.author,
          content: jsonData.description,
          tags: jsonData.categories,
          source: jsonData.source,
        },
      });
    }
  }

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
