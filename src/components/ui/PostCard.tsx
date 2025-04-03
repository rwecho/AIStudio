"use client";
import { parseHtml } from "@/utils/html";
import { Post } from "@prisma/client";
import { Card, Image, Tooltip } from "antd";
import { timeAgo } from "@/utils/formatDate";
import Title from "antd/es/typography/Title";
import Link from "next/link";
import style from "./PostCard.module.css";

const PostCard = ({ post }: { post: Post }) => {
  const { title, firstImage } = parseHtml(post.content);
  return (
    <Card
      cover={
        firstImage ? (
          <Image
            src={firstImage}
            alt={title}
            height={200}
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
          ></Image>
        ) : (
          <Image
            src="https://images.unsplash.com/photo-1633412802994-5c058f151b66"
            alt={title}
            height={200}
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
          ></Image>
        )
      }
      className={style.postCard}
      style={{
        overflow: "hidden",
      }}
    >
      <Title
        level={5}
        style={{
          height: "48px",
          lineHeight: "24px",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          margin: "0",
        }}
      >
        <Tooltip title={title}>{title}</Tooltip>
      </Title>
      <div
        className=""
        style={{
          fontSize: "12px",
          color: "#999",
          marginTop: "8px",
          textAlign: "right",
        }}
      >
        {post.published && timeAgo(post.published)}
        <Link
          href={`/post/${post.id}`}
          style={{
            marginLeft: "16px",
          }}
        >
          详情
        </Link>
      </div>
    </Card>
  );
};

export default PostCard;
