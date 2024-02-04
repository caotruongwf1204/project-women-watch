"use client";

import { userActions } from "@/app/lib/features/user.slide";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";


interface FormData {
  email: string;
  password: string;
  name: string;
  number: number;
  order: number;
}
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

export default function CartUser() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    const useData = {
      ...data,
      order: Date.now(),
    };
    console.log(useData);
    dispatch(userActions.setFormData(useData));
    router.push('/success');
  };

  const cartItems: CartItem[] = useSelector(
    (state: RootState) => state.cart.items
  );
  const totalItem = cartItems.length;

  return (
    <div className="w-full">
      <div className="flex">
        <p>Bạn đã có tài khoản</p>
        <Link className="text-red-500 ml-3" href={"/login"}>
          Đăng nhập
        </Link>
      </div>
      <div className="mt-5">
        <h5>Thông tin khách hàng</h5>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <input
              className="login-input"
              placeholder="Họ và tên"
              {...register("name", {
                required: "Trường này không được để trống",
              })}
              type="text"
            />
            {errors.name && (
              <span className="text-red-500 flex items-center justify-start">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="form-control">
            <input
              className="login-input"
              placeholder="Nhập số điện thoại"
              {...register("number", {
                required: "Trường này không được để trống",
                pattern: {
                  value: /^(?:(\d)(?!\1{9})){10}$/,
                  message: "Số điện thoại không hợp lệ",
                },
              })}
              type="tel"
            />
            {errors.number && (
              <span className="text-red-500 flex items-center justify-start">
                {errors.number.message}
              </span>
            )}
          </div>
          <div className="">
            <button
              className="btn-submit w-full py-5 text-center bg-black text-white"
              type="submit"
              disabled={totalItem === 0}
            >
              TẠO ĐƠN HÀNG
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
