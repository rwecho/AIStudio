"use client";
import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

const NoContentCard = () => {
  return (
    <Card>
      <Typography>
        <Title level={4}>无法解析页面</Title>
        <Paragraph type="danger">
          该页面可能不支持阅读模式，或内容过于复杂。
        </Paragraph>
      </Typography>
    </Card>
  );
};

export default NoContentCard;
