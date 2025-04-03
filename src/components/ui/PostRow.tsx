"use client";
import React from "react";
import { Card, Tag, Space, Typography, Image } from "antd";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FileTextOutlined, FilePdfOutlined } from "@ant-design/icons";

import styles from "./PostRow.module.css";
import { Post } from "@prisma/client";
import { parseHtml } from "@/utils/html";
import { timeAgo } from "@/utils/formatDate";

const { Text } = Typography;

// 辅助函数：获取文件扩展名
const getFileExtension = (filename: string): string => {
  return filename.split(".").pop()?.toLowerCase() || "";
};

// 辅助函数：根据扩展名判断文件类型
const getFileType = (filename: string): string => {
  const ext = getFileExtension(filename);

  if (["jpg", "jpeg", "png", "gif", "webp", "bmp"].includes(ext)) {
    return "image";
  } else if (["mp4", "webm", "ogg", "mov"].includes(ext)) {
    return "video";
  } else if (["mp3", "wav", "ogg", "aac"].includes(ext)) {
    return "audio";
  } else if (ext === "pdf") {
    return "pdf";
  } else {
    return "other";
  }
};

// 媒体文件组件
const MediaFile = ({ file }: { file: string }) => {
  const fileType = getFileType(file);
  const fileUrl = `/api/oss?ossKey=${file}`;

  switch (fileType) {
    case "image":
      return <Image src={fileUrl} alt="Media" style={{ maxWidth: "100%" }} />;
    case "video":
      return (
        <video controls style={{ maxWidth: "100%" }}>
          <source src={fileUrl} />
          您的浏览器不支持视频播放
        </video>
      );
    case "audio":
      return (
        <audio controls style={{ width: "100%" }}>
          <source src={fileUrl} />
          您的浏览器不支持音频播放
        </audio>
      );
    case "pdf":
      return (
        <div className={styles.pdfLink}>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            <FilePdfOutlined /> 查看PDF文档
          </a>
        </div>
      );
    default:
      return (
        <div className={styles.fileLink}>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            <FileTextOutlined /> {file.split("/").pop() || "下载文件"}
          </a>
        </div>
      );
  }
};

const PostRow = ({ post }: { post: Post }) => {
  const { content } = parseHtml(post.content);

  return (
    <Card hoverable className={styles.postRow}>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          {post.mediaFiles.length > 0 && (
            <div className={styles.mediaFiles}>
              {post.mediaFiles.map((file) => (
                <div key={file} className={styles.mediaFileWrapper}>
                  <MediaFile file={file} />
                </div>
              ))}
            </div>
          )}

          <div className={styles.content}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeSanitize]}
              components={{
                code({ className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <SyntaxHighlighter
                      {...(props as any)}
                      language={match[1]}
                      PreTag="div"
                      style={vscDarkPlus}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </div>

          <Space className={styles.meta} size={16}>
            <Space>
              <Text type="secondary">{post.source}</Text>
            </Space>
            <Space>
              <Text type="secondary">{timeAgo(post.published!)}</Text>
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
