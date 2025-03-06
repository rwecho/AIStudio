"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MiniSearchBar } from "./SearchSection";

// Desc: Header component for the landing page
const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [showMiniSearch, setShowMiniSearch] = useState(false);

  // Monitor URL changes to detect search state
  useEffect(() => {
    const handleRouteChange = () => {
      // Check if the URL has search parameters or other indicators
      const searchParams = new URLSearchParams(window.location.search);
      const hasSearch =
        searchParams.has("q") || window.location.hash === "#search";
      setShowMiniSearch(hasSearch);
    };

    // Listen for route changes or use custom event for search completion
    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener("searchComplete", (e: any) => {
      setShowMiniSearch(e.detail?.showMiniSearch ?? false);
      if (e.detail?.searchText) {
        setSearchText(e.detail.searchText);
      }
    });

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("searchComplete", handleRouteChange as any);
    };
  }, []);

  return (
    <header className="relative">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex justify-between items-center py-4 md:py-8">
          <div className="text-2xl font-extrabold bg-gradient-to-r from-[#7c3aed] to-[#ec4899] inline-block text-transparent bg-clip-text z-10">
            AIStudioX
          </div>

          <div className="flex items-center gap-8 z-10">
            <AnimatePresence>
              {showMiniSearch && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mr-4"
                >
                  <MiniSearchBar
                    searchText={searchText}
                    setSearchText={(text) => {
                      setSearchText(text);
                      // Dispatch a custom event to notify SearchSection
                      window.dispatchEvent(
                        new CustomEvent("miniSearchUpdate", {
                          detail: { searchText: text },
                        })
                      );
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

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
