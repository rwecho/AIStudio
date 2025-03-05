"use client";
import Link from "next/link";

// Desc: Header component for the landing page
const Header = () => {
  return (
    <header className="relative">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex justify-between items-center py-4 md:py-8">
          <div className="text-2xl font-extrabold bg-gradient-to-r from-[#7c3aed] to-[#ec4899] inline-block text-transparent bg-clip-text z-10">
            AIStudioX
          </div>
          <div className="flex gap-8 z-10">
            <Link
              href="/"
              className="text-[#f8fafc] font-medium hover:text-[#06b6d4] transition-colors"
            >
              首页
            </Link>
            <Link
              href="/sites/new"
              className="text-[#f8fafc] font-medium hover:text-[#06b6d4] transition-colors"
            >
              提交网站
            </Link>
            <Link
              href="/about"
              className="text-[#f8fafc] font-medium hover:text-[#06b6d4] transition-colors"
            >
              关于
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
