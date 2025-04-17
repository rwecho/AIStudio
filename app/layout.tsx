import "./globals.css";
import { generateWebsiteJsonLd } from "./lib/metadata";
import JsonLd from "./components/JsonLd";
import Image from "next/image";
import Link from "next/link";

export default async function RootLayout({
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
        <div className="container mx-auto px-4 py-0">
          <header className="mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between py-4 border-b border-gray-200">
              {/* Logo 部分 */}
              <Link href="/">
                <div className="flex items-center mb-4 md:mb-0">
                  <Image
                    src="/logo.jpg"
                    alt="AIStudioX Logo"
                    width={64}
                    height={64}
                    className="mr-3"
                  />
                  <div>
                    <h1 className="text-2xl font-bold">AIStudioX</h1>
                    <span className="text-sm text-gray-500">
                      <strong className="mr-2">关注科技脉搏</strong>
                      关注人工智能、LLM、ChatGPT、AI绘画等前沿科技
                    </span>
                  </div>
                </div>
              </Link>

              {/* 导航栏 */}
              <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
                <Link
                  href="/"
                  className="font-medium text-gray-800 hover:text-blue-600 transition duration-150"
                >
                  首页
                </Link>
                {/* <Link
              href="/read"
              className="font-medium text-gray-800 hover:text-blue-600 transition duration-150"
            >
              阅读
            </Link> */}

                <Link
                  href="/?lang=en"
                  className="font-medium text-gray-800 hover:text-blue-600 transition duration-150"
                >
                  English
                </Link>
                <Link
                  href="/?lang=cn"
                  className="font-medium text-gray-800 hover:text-blue-600 transition duration-150"
                >
                  中文
                </Link>
              </nav>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
