"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch?: (value: string) => void;
  size?: "small" | "middle" | "large";
}

const SearchBar = ({
  className = "",
  placeholder = "搜索文章、标签...",
  onSearch,
  size = "middle",
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!searchTerm.trim()) return;

    if (onSearch) {
      onSearch(searchTerm);
    } else {
      // 默认行为：导航到搜索页面
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={`flex ${className}`}>
      <Input
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        size={size}
        allowClear
      />
      <Button
        type="primary"
        icon={<SearchOutlined />}
        onClick={handleSearch}
        size={size}
      >
        搜索
      </Button>
    </div>
  );
};

export default SearchBar;
