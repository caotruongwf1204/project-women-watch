import React from "react";
import NextImage from "next/image";
import "@/app/css/product-card.css";

export default function ProductCart(product: any) {
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(product.price);
  const formattedSale = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(product.sale);
  return (
    <div className="product-card-main p-5">
      <div className="overflow-visible w-full h-full flex items-center justify-center py-3">
        <div className="product-card-img">
          <NextImage
            width={280}
            height={280}
            alt={product.title}
            className="card-img object-cover"
            src={product.thumbnail}
          />

          <NextImage
            width={280}
            height={280}
            alt={product.title}
            className="card-hover object-cover"
            src={product.hover}
          />
        </div>
      </div>
      <div className="card-info">
        <div className="flex items-center justify-between">
          <span className="text-red-500">{formattedSale}</span>
          <span className="line-through text-gray-400">{formattedPrice}</span>
        </div>
        <h3 className="text-sm mt-3">{product.title}</h3>
      </div>
    </div>
  );
}
