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

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);
  return (
    <div className="login-main flex items-center justify-center py-24">
      <div className="container text-center">
        <div className="login-btn font-semibold">
          <button className="btn px-3">
            <Link href={"/login"}>Đăng nhập</Link>
          </button>
          <button className="btn px-3">
            <Link href={"/register"}>Đăng ký</Link>
          </button>
        </div>
        <div className="login-form">
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="login-label">Email</label>
              <input
                className="login-input"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="text"
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div className="form-control">
              <label className="login-label">Password</label>
              <input
                className="login-input"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[a-zA-Z0-9]).{8,}$/,
                    message:
                      "Password must be at least 8 characters long, with the first letter in uppercase and a combination of letters and numbers.",
                  },
                })}
                type="password"
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>

            <div className="login-btn">
              <button className="btn-submit" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
