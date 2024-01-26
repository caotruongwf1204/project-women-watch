"use client";

import { userActions } from "@/app/lib/features/user.slide";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";

interface FormData {
  email: string;
  password: string;
  name: string;
  number: number;
}

export default function CartUser() {
  const dispatch = useDispatch();
  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    dispatch(userActions.setFormData(data));
  };

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
            >
              TẠO ĐƠN HÀNG
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
