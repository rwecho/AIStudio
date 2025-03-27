export interface ParsedHtml {
  title: string;
  content: string;
  firstImage: string | null;
}

export const parseHtml = (html: string) => {
  const titleRegex = /<b>(.*?)<\/b>/;
  const imageRegex = /<img[^>]+src="([^">]+)"/;

  // 移除底部的投稿、频道、聊天链接
  const cleanedHtml = html.replace(
    /<span class="emoji">.*?<\/a>\s*<span class="emoji">.*?<\/a>\s*<span class="emoji">.*?<\/a>/,
    ""
  );

  const titleMatch = cleanedHtml.match(titleRegex);
  const title = titleMatch ? titleMatch[1] : "";

  const firstImageMatch = cleanedHtml.match(imageRegex);
  const firstImage = firstImageMatch ? firstImageMatch[1] : null;

  // 从html去除title和图片
  const content = cleanedHtml
    .replace(/<b>.*?<\/b>/, "")
    .replace(/<img[^>]+>/, "")
    .trim();

  // 将最后一次出现的 <br><br> 移除
  const cleanedContent = content
    .replace(/<p>\s*<br>\s*<br>/g, "<p>") // Fixed regex to remove <br><br> after <p>
    .replace(/(.+)(<br>\s*<br>).*?<\/p>$/g, "$1</p>");

  return {
    title: title.replace(/<[^>]+>/g, ""),
    content: cleanedContent,
    firstImage,
  };
};
