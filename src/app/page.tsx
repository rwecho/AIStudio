import React from "react";
import HeroSection from "@/components/home/HeroSection";
import NewsSection from "@/components/home/NewsSection";
import ProductSection from "@/components/home/ProductSection";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <ProductSection />
    </>
  );
}
