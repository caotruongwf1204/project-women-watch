"use client";

import { cartActions } from "@/app/lib/features/cart.slide";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";



export default function ProductInfo({ product }: any) {
  const [quantity, setQuantity] = useState(1);
  const [activeColor, setActiveColor] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (product.color.length > 0 && !activeColor) {
      setActiveColor(product.color[0]);
    }
  }, [product.color, activeColor]);

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleColorClick = (color: string) => {
    setActiveColor(color);
  };

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart({
      id: product.id,
      thumbnail: product.thumbnail,
      title: product.title,
      price: product.price,
      quantity,
      color: activeColor,
    }));
  };


  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(product.price);
  const formattedSale = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(product.sale);
  return (
    <div className="product-info ml-24">
      <h1 className="font-normal text-2xl">{product.title}{activeColor && `- ${activeColor}`}</h1>

      <div className="product-price">
        <span className="text-red-500 text-2xl">{formattedSale}</span>
        <span className="line-through text-gray-400">{formattedPrice}</span>
      </div>

      <div className="describe gap-1 grid mt-3">
        <p className="text-gray-500 text-base">{product.description}</p>
        <p className="text-gray-600 font-medium">{product.guarantee}</p>
        <p className="text-gray-600 font-medium">{product.promotion}</p>

        <div className="flex">
        {product.color.map((color: string, index: number) => (
            <button className={`btn-color mr-2 ${activeColor === color ? 'active' : ''}`} onClick={() => handleColorClick(color)} key={index}>{color}</button>
            ))}
            </div>
      </div>

      <div className="product-quantity mt-5">
        <h6 className="font-normal mb-2">Số lượng :</h6>
        <div className="product-plus-minus w-32 h-8 flex border border-gray-300 p-1 mt-3">
          <button
            onClick={handleMinus}
            className="px-2 flex items-center justify-center text-lg"
          >
            -
          </button>
          <input
            className="border-0 outline-none text-center w-full"
            type="number"
            readOnly
            value={quantity}
            min="1"
          />
          <button
            onClick={handlePlus}
            className="px-2 flex items-center justify-center text-lg"
          >
            +
          </button>
        </div>
      </div>

      <div className="add-to-cart grid gap-4 mt-6">
        <button onClick={handleAddToCart} className="btn-add-to-cart">THÊM VÀO GIỎ HÀNG</button>
        <button className="btn-buy-now">MUA NGAY</button>
      </div>
    </div>
  );
}
