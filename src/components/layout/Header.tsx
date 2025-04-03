"use client";

import Link from "next/link";
import { mainNavItems } from "@/constants/navigation";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <div className="logo">
            <span className="logo-triangle">AI</span>StudioX
            <div className="tagline">智能创作与AI社区</div>
          </div>
          <div className="nav-links">
            {mainNavItems.map((item) =>
              item.children ? (
                <div className="dropdown" key={item.href}>
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                  <div className="dropdown-content">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
        <div className="nav-right">
          {/* {!isMobile && (
            <SearchBar
              className="search-box"
              size="middle"
              placeholder="搜索文章、标签..."
            />
          )} */}
        </div>
      </nav>
    </header>
  );
}
