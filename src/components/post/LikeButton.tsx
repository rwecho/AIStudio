"use client";

import { useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Button, message } from "antd";

interface LikeButtonProps {
  id: string;
  initialLikes: number;
}

export default function LikeButton({ id, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async () => {
    setIsLoading(true);

    try {
      if (!liked) {
        // 添加点赞
        const response = await fetch(`/api/posts/likes?id=${id}`, {
          method: "POST",
        });

        if (response.ok) {
          const data = await response.json();
          setLikes(data.likes);
          setLiked(true);
          message.success("谢谢您的点赞!");
        }
      } else {
        // 取消点赞
        const response = await fetch(`/api/posts/likes?id=${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          const data = await response.json();
          setLikes(data.likes);
          setLiked(false);
        }
      }
    } catch (error) {
      console.error("点赞操作失败:", error);
      message.error("操作失败，请稍后再试");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      type="text"
      icon={
        liked ? <HeartFilled style={{ color: "#ff4d4f" }} /> : <HeartOutlined />
      }
      onClick={handleLike}
      loading={isLoading}
    >
      {likes}
    </Button>
  );
}
