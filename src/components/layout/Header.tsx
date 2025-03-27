"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNavItems } from "@/constants/navigation";
import { useIsMobile } from "@/hooks/useMedia";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useIsMobile();

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <div className="logo">
            <span className="logo-triangle">▲</span>StudioX
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
          {!isMobile && (
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="搜索"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
