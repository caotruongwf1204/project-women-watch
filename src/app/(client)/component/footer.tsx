import Link from "next/link";
import NextImage from "next/image";
import "@/app/css/footer.css";
import { IoMdShareAlt } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center pt-10 pb-10">
      <div className="container px-4 pb-10">
        <div className="row mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="font-medium">CÔNG TY</h3>
            <Link className="text-sm text-slate-500" href={"/"}>
              Giới thiệu
            </Link>
          </div>
          <div>
            <h3 className="font-medium">CHÍNH SÁCH</h3>
            <ul>
              <li>
                <Link className="text-sm text-slate-500" href={"/"}>
                  Chính sách bảo hành
                </Link>
              </li>
              <li>
                <Link className="text-sm text-slate-500" href={"/"}>
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link className="text-sm text-slate-500" href={"/"}>
                  Chính sách thanh toán
                </Link>
              </li>
              <li>
                <Link className="text-sm text-slate-500" href={"/"}>
                  Chính sách vận chuyển
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-8">
              <h3 className="font-medium">KẾT NỐI VỚI CHÚNG TÔI</h3>
              <ul className="flex">
                <li>
                  <Link href={"/"}>
                    <NextImage
                      width={24}
                      height={24}
                      alt="icon"
                      src="/icons8_facebook.png"
                    />
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <NextImage
                      width={24}
                      height={24}
                      alt="icon"
                      src="/icons8_instagram.png"
                    />
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <NextImage
                      width={24}
                      height={24}
                      alt="icon"
                      src="/icons8_tiktok.png"
                    />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">PHƯƠNG THỨC THANH TOÁN</h3>
              <ul className="flex">
                <li>
                  <Link href={"/"}>
                    <NextImage
                      width={24}
                      height={24}
                      alt="icon"
                      src="/momo.png"
                    />
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <NextImage
                      width={24}
                      height={24}
                      alt="icon"
                      src="/vnpay.png"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div  className="h-full">
            <h3 className="font-medium">FANPAGE CỦA CHÚNG TÔI</h3>
            <div className="page w-100% h-32 mt-3 relative">
              <div className="absolute top-0 left-0 pt-1 pl-1 flex fload w-full text-white">
                <Link href={"/"} className="pr-3">
                  <NextImage
                    width={42}
                    height={42}
                    alt="logo"
                    src="/icon logo.jpg"
                  />
                </Link>
                <div>
                  <Link href={"/"}>Olivia Burton Vietnam</Link>

                  <p>5.608 người theo dõi</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 flex justify-between p-1 w-full">
                <button className="flex items-center justify-center px-2 border border-gray-300 bg-gray-200">
                  <IoLogoFacebook style={{ color: "blue" }} /> Theo dõi trang
                </button>

                <button className="flex items-center justify-center px-1 border border-gray-300 bg-gray-200">
                  <IoMdShareAlt style={{ color: "gray" }} /> Chia sẻ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
