"use client";
import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

const ErrorPageCard = ({ error }: { error: unknown }) => {
  return (
    <Card>
      <Typography>
        <Title level={4}>获取或解析页面时出错</Title>
        <Paragraph type="danger">{String(error)}</Paragraph>
      </Typography>
    </Card>
  );
};

export default ErrorPageCard;
