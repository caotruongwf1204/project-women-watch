"use client";

import Link from "next/link";
import "@/app/css/login.css";
import { useForm, SubmitHandler  } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = data => console.log(data);
  return (
    <div className="login-main flex items-center justify-center py-24">
      <div className="container text-center">
        <div className="login-btn font-semibold mb-10">
          <button className="btn px-3">
            <Link href={"/login"}>Đăng nhập</Link>
          </button>
          <button className="btn px-3">
            <Link href={"/register"}>Đăng ký</Link>
          </button>
        </div>
        <div className="login-form-main flex items-center justify-center">
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <input
                className="login-input"
                placeholder="Nhập số điện thoại"
                {...register("email", {
                  required: "Trường này không được để trống",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Địa chỉ email không hợp lệ",
                  },
                })}
                type="text"
              />
              {errors.email && <span>{errors.email.message}</span>}
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
              {errors.password && <span>{errors.password.message}</span>}
            </div>

            <div className="login-btn">
              <button className="btn-submit" type="submit">
              ĐĂNG NHẬP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
