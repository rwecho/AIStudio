import { Post } from "@/app/generated/client";

export const formatPost = (post: Post) => {
  console.log("post", post);
  if (post.source === "AI Post — Artificial Intelligence") {
    // 移除包含 @aipost 最后一段
    post.content = post.content.split(/@aipost/)[0];
  }

  if (post.source === "科技圈🎗在花频道📮") {
    // 移除包含 📮[投稿] 最后一段
    post.content = post.content.split(/📮/)[0];
  }

  if (post.source === "Yummy 😋") {
    // 移除包含 🗒 标签 最后一段
    post.content = post.content.split(/🗒 标签/)[0];
  }
  if (post.source === "趣猫🐱") {
    // 用正则 移除 🗣 开始到 👈结束的内容

    post.content = post.content.replace(/🗣.*?👈/g, "");

    post.content = post.content.split(/🍭/)[0];
  }
  if (post.source === "资源分享:软件|网站|开源") {
    // 用正则 移除 【链接见评论区】 「链接见评论区」这种
    post.content = post.content.split(/.*评论区.*/g)[0];
  }

  if (post.source === "Meet ChatGPT!") {
    // 删除 Subscribe
    post.content = post.content.split(/\[Subscribe/g)[0];

    // 删除 订阅
    post.content = post.content.split(/\[订阅/g)[0];
  }

  if (post.source?.includes("Digital Dreams")) {
    // 删除 Subscribe
    post.content = post.content.split(/\[Subscribe/g)[0];

    // 删除 订阅
    post.content = post.content.split(/\[订阅/g)[0];
  }
  return post;
};
