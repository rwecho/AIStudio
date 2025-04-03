"use client";
import React from "react";
import { Card, Tag, Space, Typography, Image } from "antd";

import {
  UserOutlined,
  ClockCircleOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import styles from "./PostRow.module.css";
import { Post } from "@prisma/client";
import { parseHtml } from "@/utils/html";
import { timeAgo } from "@/utils/formatDate";

const { Text, Title } = Typography;

const PostRow = ({ post }: { post: Post }) => {
  const { title, firstImage, content } = parseHtml(post.content);

  return (
    <Card hoverable className={styles.postRow}>
      <div className={styles.container}>
        {firstImage && (
          <div className={styles.imageWrapper}>
            <Image src={firstImage} alt={title} className={styles.image} />
          </div>
        )}

        <div className={styles.contentContainer}>
          <Title level={4} className={styles.title}>
            {title}
          </Title>

          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>

          <Space className={styles.meta} size={16}>
            <Space>
              <UserOutlined />
              <Text type="secondary">{post.author}</Text>
            </Space>
            <Space>
              <ClockCircleOutlined />
              <Text type="secondary">{timeAgo(post.published!)}</Text>
            </Space>
            <Space>
              <LinkOutlined />
              <Text type="secondary">{post.source}</Text>
            </Space>
          </Space>
          <div className={styles.tags}>
            {post.tags.map((tag, index) => (
              <Tag key={index} color="blue">
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PostRow;
