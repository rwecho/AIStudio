"use client";

import { useEffect, useState } from "react";

interface ViewCounterProps {
  id: string;
  initialViews: number;
}

export default function ViewCounter({ id, initialViews }: ViewCounterProps) {
  const [views, setViews] = useState(initialViews);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 只在客户端运行一次，增加浏览量
    const incrementViews = async () => {
      try {
        const response = await fetch(`/api/posts/views?id=${id}`, {
          method: "POST",
        });

        if (response.ok) {
          const data = await response.json();
          setViews(data.views);
        }
      } catch (error) {
        console.error("增加浏览量失败:", error);
      } finally {
        setIsLoading(false);
      }
    };

    incrementViews();
  }, [id]);

  return <span>浏览: {isLoading ? initialViews : views}</span>;
}
