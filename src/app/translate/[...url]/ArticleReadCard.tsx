"use client";
import { Card, Typography, Space, Divider, Tag, Layout, Row, Col } from "antd";
import {
  BookOutlined,
  GlobalOutlined,
  CalendarOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;

import styles from "./ArticleReadCard.module.css";
// 添加客户端样式
import "antd/dist/reset.css";

const ArticleReadCard = ({
  article,
}: {
  article: {
    title: string | null | undefined;
    content: string | null | undefined;
    excerpt: string | null | undefined;
    byline: string | null | undefined;
    publishedTime: string | null | undefined;
    siteName: string | null | undefined;
    lang: string | null | undefined;
  };
}) => {
  return (
    <>
      <Layout>
        <Content className={styles.readContainer}>
          <Card variant="borderless" style={{ marginBottom: "24px" }}>
            <Typography>
              <Title level={1}>{article?.title || "无标题"}</Title>
              {article?.byline && (
                <Space align="center" style={{ marginBottom: "16px" }}>
                  <UserOutlined />
                  <Text type="secondary">{article.byline}</Text>
                  {article?.publishedTime && (
                    <>
                      <Divider type="vertical" />
                      <CalendarOutlined />
                      <Text type="secondary">
                        {new Date(article.publishedTime).toLocaleString()}
                      </Text>
                    </>
                  )}
                </Space>
              )}

              {article?.excerpt && (
                <Paragraph
                  type="secondary"
                  style={{
                    background: "#f5f5f5",
                    padding: "16px",
                    borderRadius: "4px",
                    marginBottom: "24px",
                  }}
                >
                  {article.excerpt}
                </Paragraph>
              )}

              {article?.content ? (
                <div
                  className={styles.articleContent}
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              ) : (
                <Paragraph>无法解析内容</Paragraph>
              )}
            </Typography>
          </Card>
          <Card
            title="文章信息"
            size="small"
            variant="borderless"
            className={styles.metadata}
          >
            <Row gutter={[16, 16]}>
              {article?.siteName && (
                <Col span={12}>
                  <Space>
                    <GlobalOutlined />
                    <Text strong>网站：</Text>
                    <Text>{article.siteName}</Text>
                  </Space>
                </Col>
              )}
              {article?.lang && (
                <Col span={12}>
                  <Space>
                    <BookOutlined />
                    <Text strong>语言：</Text>
                    <Tag color="blue">{article.lang}</Tag>
                  </Space>
                </Col>
              )}
            </Row>
          </Card>
        </Content>
      </Layout>
    </>
  );
};

export default ArticleReadCard;
