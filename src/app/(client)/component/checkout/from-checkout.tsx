"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";

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
  user: FormData;
}

export default function CartUser() {
  const userData = useSelector((state: RootState) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <>
      <div className="p-5">
        <span className="font-medium">Địa chỉ giao hàng</span>
      </div>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <div className="form-row flex justify-between mb-4 flex-col lg:flex-row">
            <div className="form-control w-full flex flex-col px-5">
              <label htmlFor="form-name">Họ tên</label>
              <input
                className="login-input"
                value={userData.name}
                type="text"
              />
              {errors.name && (
                <span className="text-red-500 flex items-center justify-start">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="form-control w-full flex flex-col px-5">
              <label htmlFor="form-phone">Số điện thoại</label>
              <input
                className="login-input"
                value={userData.number}
                type="tel"
              />
              {errors.number && (
                <span className="text-red-500 flex items-center justify-start">
                  {errors.number.message}
                </span>
              )}
            </div>
          </div>

          <div className="form-control px-5 flex flex-col mb-4">
            <label htmlFor="form-address">Địa chỉ</label>
            <input
              className="login-input"
              {...register("name", {
                required: "Trường này không được để trống",
              })}
              type="tel"
            />
            {errors.name && (
              <span className="text-red-500 flex items-center justify-start">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="form-row flex px-5 mb-4 flex-col lg:flex-row">
            <div className="form-field mr-2" >
              <label htmlFor="province">Thành phố/Tỉnh</label>
              <select className="province" id="province">
                <option>Thành phố/Tỉnh</option>
              </select>
            </div>
            <div className="form-field mr-2">
              <label htmlFor="district">Quận/Huyện</label>
              <select className="district" id="district">
                <option>Quận/Huyện</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="ward">Phường/Xã</label>
              <select className="ward" id="ward">
                <option>Phường/Xã</option>
              </select>
            </div>
          </div>
        </div>
      </form>

      <div className="px-5 py-8 mt-10 border-t-2 border-gray-100">
        <span className="font-medium">Phương thức thanh toán</span>
        <div className="flex items-center">
          <input type="radio" checked />
          <label className="pl-1" htmlFor="COD">
            COD
          </label>
        </div>
      </div>
    </>
  );
}
