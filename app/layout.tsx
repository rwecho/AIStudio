import "./globals.css";
import { generateWebsiteJsonLd } from "./lib/metadata";
import JsonLd from "./components/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 生成网站的结构化数据
  const websiteJsonLd = generateWebsiteJsonLd();

  return (
    <html lang="zh-CN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`antialiased`}>
        <JsonLd data={websiteJsonLd} />
        {children}
      </body>
    </html>
  );
}
