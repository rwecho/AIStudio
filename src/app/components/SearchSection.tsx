"use client";
import { useEffect, useState } from "react";
import SiteCard from "./SiteCard";
import { delay } from "@/utils/Promise";
import { getSites } from "@/services/sites";

const CatalogTabPanel = ({ activeTab }: { activeTab: string }) => {
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        await delay(3000);
        const sites = await getSites(activeTab);
        setSites(sites);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [activeTab]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* display skeleton of 6 cards */}
      {loading &&
        Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl relative animate-pulse"
          >
            <div className="h-64 bg-[#2d3a4b]"></div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 flex items-center justify-center bg-[#2d3a4b] rounded-lg text-white font-bold"></div>
                <div className="text-xl font-semibold w-72 bg-[#2d3a4b] h-6"></div>
              </div>
              <div className="w-3/4 bg-[#2d3a4b] h-4 mb-5"></div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#2d3a4b] text-xs px-3 py-1 rounded text-[#2d3a4b]"></span>
              </div>
            </div>
          </div>
        ))}

      {!loading &&
        sites.map((site) => (
          <SiteCard
            key={site.id}
            cover={site.cover}
            title={site.title}
            description={site.description}
            tags={site.tags}
            label={site.label}
          ></SiteCard>
        ))}
    </div>
  );
};

const CatalogTabs = () => {
  const tabs = [
    { name: "全部", value: "all" },
    { name: "AI聊天", value: "chat" },
    { name: "图像生成", value: "image" },
    { name: "文本处理", value: "text" },
    { name: "音频生成", value: "audio" },
    { name: "视频创作", value: "video" },
    { name: "开发工具", value: "dev" },
  ];

  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12 z-10 items-start">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setActiveTab(tab.value)}
          className={`bg-white/5 px-6 py-2 rounded-full border border-transparent hover:border-white/20 transition-colors ${
            activeTab === tab.value
              ? "bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white"
              : ""
          }`}
        >
          {tab.name}
        </button>
      ))}

      <div className="my-16">
        <CatalogTabPanel activeTab={activeTab}></CatalogTabPanel>
      </div>
    </div>
  );
};

const SearchSection = () => {
  return (
    <div className="py-16 flex flex-col items-center text-center relative">
      <h1 className="text-5xl font-extrabold mb-6 leading-tight z-10">
        发现和探索
        <span className="bg-gradient-to-r from-[#7c3aed] to-[#ec4899] inline-block text-transparent bg-clip-text">
          AI工具生态
        </span>
      </h1>
      <p className="text-xl text-[#94a3b8] max-w-2xl mb-10 z-10">
        一站式导航平台，帮助您找到最有价值的AI工具、模型和资源，加速您的AI之旅
      </p>

      <div className="relative max-w-2xl w-full mb-12 z-10">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#94a3b8]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <input
          type="text"
          placeholder="搜索AI工具、模型或资源..."
          className="w-full py-5 pl-12 pr-6 bg-[#1e293b] border-2 border-white/10 rounded-xl text-[#f8fafc] text-base focus:outline-none focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/30 transition-all"
        />
      </div>

      <CatalogTabs></CatalogTabs>
    </div>
  );
};
export default SearchSection;
