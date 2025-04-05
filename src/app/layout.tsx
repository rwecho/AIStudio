import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Suspense } from "react";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI StudioX - 智能资讯平台",
  description: "最新AI资讯、教程、工具和产品的一站式平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AntdRegistry>
          <div className="app-container">
            <Suspense>
              <main>{children}</main>
            </Suspense>
          </div>
        </AntdRegistry>
      </body>
    </html>
  );
}
