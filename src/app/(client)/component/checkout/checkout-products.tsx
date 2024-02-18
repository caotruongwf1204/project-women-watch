"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NextImage from "next/image";

interface CartItem {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
}

interface RootState {
  cart: {
    items: CartItem[];
  };
}

export default function CheckoutProducts() {
  const dispatch = useDispatch();
  const cartItems: CartItem[] = useSelector(
    (state: RootState) => state.cart.items
  );
  return (
    <>
      <div className="from-product">
        <ul className="flex justify-between p-5">
          <li className="font-medium">Sản phẩm</li>
          <li className="font-medium">Đơn giá</li>
        </ul>

        {cartItems.map((item: CartItem) => (
          <div
            key={item.id}
            className="cart-pruduct-table items-center justify-center py-5 border-t-2 border-gray-100 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4"
          >
            <div className="cart-img flex items-center justify-center">
              <NextImage
                priority={true}
                width={80}
                height={80}
                className="object-cover"
                alt={item.title}
                src={item.thumbnail}
              />
            </div>
            <div className="cart-title flex items-center w-32 pl-3 truncate">
              {item.title}
            </div>
            <div className="cart-quantity pl-3 flex justify-center">
              <span className="text-red-600">x{item.quantity}</span>
            </div>
            <div className="cart-total flex items-center justify-center w-24 pl-3">
              {(item.price * item.quantity).toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </div>
          </div>
        ))}

        <div className="checkout-total border-t-2 border-gray-100">
          <div className="flex justify-between py-5">
            Tổng tiền hàng :
            <span className="font-semibold">
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
            </span>
          </div>
          <div className="flex justify-between py-5">
            Chi phí vận chuyển :<span className="font-semibold">0đ</span>
          </div>
        </div>

        <div className="checkout-total border-t-2 border-gray-100">
          <div className="flex justify-between py-5">
            Tổng thanh toán :
            <span className="font-semibold">
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
