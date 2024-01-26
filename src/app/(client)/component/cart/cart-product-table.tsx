"use client";

import React from "react";
import NextImage from "next/image";
import "@/app/css/products-detail.css";
import { HiTrash } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/app/lib/features/cart.slide";
import { divider } from "@nextui-org/react";
import Link from "next/link";

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

export default function CartProductTable() {
  const dispatch = useDispatch();
  const cartItems: CartItem[] = useSelector(
    (state: RootState) => state.cart.items
  );

  const handleMinus = (itemId: number, initialQuantity: number) => {
    if (initialQuantity > 1) {
      dispatch(
        cartActions.updateQuantity({
          id: itemId,
          quantity: initialQuantity - 1,
        })
      );
    }
  };

  const handlePlus = (itemId: number, initialQuantity: number) => {
    dispatch(
      cartActions.updateQuantity({ id: itemId, quantity: initialQuantity + 1 })
    );
  };

  const handleRemove = (itemId: number) => {
    dispatch(cartActions.removeItem({ id: itemId }));
  };

  return (
    <>
      <div className="table-auto">
        <div className="table-top flex justify-between text-gray-500 border-b border-gray-300">
          <label className="mb-3 max-w-20">Hình ảnh</label>
          <label className="mb-3 max-w-48 pl-3">Tên sản phẩm</label>
          <label className="mb-3 max-w-24 pl-3">Giá</label>
          <label className="mb-3 max-w-32 pl-3">Số lượng</label>
          <label className="mb-3 max-w-24 pl-3">Thành tiền</label>
        </div>

        {cartItems.length === 0 ? (
          <h1 className="text-xl text-center">
            Không có sản phẩm nào trong giỏ hàng.
          </h1>
        ) : (
          <>
            {cartItems.map((item: CartItem) => (
              <div
                key={item.id}
                className="cart-pruduct-table flex items-center justify-center py-5"
              >
                <div className="cart-img flex items-center justify-center w-20 h-20">
                  <NextImage
                    priority={true}
                    width={80}
                    height={80}
                    className="object-cover"
                    alt={item.title}
                    src={item.thumbnail}
                  />
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="cart-remove"
                  >
                    <HiTrash />
                  </button>
                </div>
                <div className="cart-title flex items-center w-48 pl-3 truncate">
                  {item.title}
                </div>
                <div className="cart-price flex items-center justify-center w-24 pl-3">
                  {item.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </div>
                <div className="cart-quantity flex items-center justify-center w-32 pl-3">
                  <div className="flex justify-between border border-gray-300">
                    <button
                      onClick={() => handleMinus(item.id, item.quantity)}
                      className="px-2 flex items-center justify-center text-lg"
                    >
                      -
                    </button>
                    <input
                      className="border-0 outline-none text-center w-8"
                      type="number"
                      readOnly
                      value={item.quantity}
                      min={1}
                    />
                    <button
                      onClick={() => handlePlus(item.id, item.quantity)}
                      className="px-2 flex items-center justify-center text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="cart-total flex items-center justify-center w-24 pl-3">
                  {(item.price * item.quantity).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </div>
              </div>
            ))}
          </>
        )}

        <div className="total-item flex justify-between py-5 mt-5 border-t border-gray-300">
          {cartItems.length === 0 ? (
            <button className="bg-black text-white px-5 py-4">
              <Link href={`/collection`}>Quay lại mua hàng</Link>
            </button>
          ) : (
            ""
          )}
          <div>
            <label className="mr-8">Tổng giỏ hàng :</label>
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
