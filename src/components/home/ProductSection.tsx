import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { productData } from "@/data/productData";

export default function ProductSection() {
  return (
    <section className="content">
      <div className="section-header">
        <h2 className="section-title">最新AI产品</h2>
        <Link href="/products" className="view-more">
          查看更多
        </Link>
      </div>

      <div className="product-grid">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
