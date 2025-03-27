"use client";
import { Card, Image, Tag } from "antd";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card
      cover={
        <Image
          src={product.imageUrl}
          alt={product.title}
          height={200}
          style={{
            objectFit: "cover",
            objectPosition: "top",
          }}
        ></Image>
      }
    >
      <Card.Meta
        title={product.title}
        description={product.description}
      ></Card.Meta>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginTop: "8px",
        }}
      >
        {product.tags.map((tag, index) => (
          <Tag className="tag" key={index}>
            {tag}
          </Tag>
        ))}
      </div>
    </Card>
  );
}
