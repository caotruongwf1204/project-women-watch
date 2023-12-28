'use client'


import { useEffect, useState } from "react";
import FilterProducts from "../component/products/filter-products";
import Selection from "../component/products/selection";
import { useRouter } from "next/router";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const router = useRouter();


  useEffect(() => {
    const category =
      router.pathname === "/collection" ? "ĐỒNG HỒ" : router.pathname === "/accessory" ? "PHỤ KIỆN" : "";
    setSelectedCategory(category);
  }, [router.pathname]);
  return (
    <main>
      <div className="flex justify-center items-center py-4 bg-gray-100">
        <span>{selectedCategory}</span>
      </div>
      <div className="flex items-center justify-center">
        <div className="container flex  py-24">
          <FilterProducts selectedCategory={selectedCategory}></FilterProducts>
          <div className="lg:w-9/12 px-5 w-full">
            <Selection></Selection>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
