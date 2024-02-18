import React from "react";
import CartProductTable from "../component/cart/cart-product-table";
import CartUser from "../component/cart/cart-user-info";
import '@/app/css/cart.css';

export default function Cart() {
  return (
    <>
      <div className="flex justify-center items-center py-4 bg-gray-100">
        <span>GIỎ HÀNG</span>
      </div>

      <div className="cart-main flex items-center justify-center py-16">
        <div className="container px-3 flex flex-col md:flex-row">
          <div className="cart-products w-full p-3 mr-4">
            <CartProductTable></CartProductTable>
          </div>
          <div className="cart-user-info w-full p-3 ml-4">
            <CartUser></CartUser>
          </div>
        </div>
      </div>
    </>
  );
}
