"use client";

import Link from "next/link";
import "@/app/css/login.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";

interface FormData {
  email: string;
  password: string;
  name: string;
  number: string;
}

export default function LoginForm() {
  const [isLogin, setLogin] = useState([false, false]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  const handleClick = (index: number): void => {
    setLogin((prevLogin) =>
      prevLogin.map((login, i) => (i === index ? true : false))
    );
  };

  const currentUrl =
    typeof window !== "undefined" ? window.location.pathname : "";

  useEffect(() => {
    setLogin([currentUrl === "/login", currentUrl === "/register"]);
  }, [currentUrl]);
  return (
    <div className="login-main flex items-center justify-center py-24">
      <div className="container text-center">
        <div className="login-btn font-semibold mb-10">
          <button
            className={`btn px-3 ${isLogin[0] ? "active" : ""}`}
            onClick={() => handleClick(0)}
          >
            <Link href={"/login"}>Đăng nhập</Link>
          </button>
          <button
            className={`btn px-3 ${isLogin[1] ? "active" : ""}`}
            onClick={() => handleClick(1)}
          >
            <Link href={"/register"}>Đăng ký</Link>
          </button>
        </div>
        <div className="login-form-main flex items-center justify-center">
          <form
            className={`login-form ${isLogin[0] ? "active" : ""}`}
            onSubmit={handleSubmit(onSubmit)}
          >
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

            <div className="form-control">
              <input
                className="login-input"
                placeholder="Nhập mật khẩu"
                {...register("password", {
                  required: "Trường này không được để trống",
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[a-zA-Z0-9]).{8,}$/,
                    message:
                      "Mật khẩu phải dài ít nhất 8 ký tự, chữ cái đầu tiên viết hoa và kết hợp cả chữ và số.",
                  },
                })}
                type="password"
              />
              {errors.password && (
                <span className="text-red-500 flex items-center justify-start">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="login-btn">
              <button className="btn-submit" type="submit">
                ĐĂNG NHẬP
              </button>
            </div>
          </form>

          <form
            className={`login-form ${isLogin[1] ? "active" : ""}`}
            onSubmit={handleSubmit(onSubmit)}
          >
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

            <div className="login-btn">
              <button className="btn-submit" type="submit">
                ĐĂNG KÝ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
