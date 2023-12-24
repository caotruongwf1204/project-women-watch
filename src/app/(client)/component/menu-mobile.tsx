import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import "@/app/css/menu-mobile.css";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";

export default function MenuMobile({ isOpen, onClose }) {
  const [submenus, setSubmenus] = useState([false, false, false]);

  const submenuToggle = (index) => {
    setSubmenus((prevSubmenus) =>
      prevSubmenus.map((submenu, i) => (i === index ? !submenu : false))
    );
  };
  return (
    <div className={`menu-mobile ${isOpen ? "show-menu-mobile" : ""}`}>
      <div className="bg-mobile w-full absolute h-full" onClick={onClose}></div>

      <div className="menu-mobile-show absolute overflow-y-auto">
        <span className="close-btn" onClick={onClose}>
          <TfiClose />
        </span>
        <div className="mobile-search">
          <form className="mobile-search-form">
            <input
              className="mobile-input-search"
              type="text"
              placeholder="Tìm kiếm..."
            />
            <button className="search-btn p-1" type="submit">
              <CiSearch />
            </button>
          </form>
        </div>
        <div className="mobile-navigation">
          <ul>
            <li className="font-medium py-1">
              <Link href={"/"}>Trang chủ</Link>
            </li>
            <li className="py-1">
              <div className="flex justify-between">
                <Link
                  className="font-medium"
                  color="foreground"
                  href="/collection"
                >
                  ĐỒNG HỒ
                </Link>
                <span
                  className="flex items-center justify-center submenu-toggle"
                  onClick={() => submenuToggle(0)}
                >
                  <GoChevronDown />
                </span>
              </div>
              <ul
                className={`px-2 submenu-mobile ${submenus[0] ? "active" : ""}`}
              >
                <li className="p-2">Bee</li>
                <li className="p-2">wonderland</li>
                <li className="p-2">Classic</li>
                <li className="p-2">Celestial</li>
                <li className="p-2">Rainbow</li>
                <li className="p-2">Floral</li>
                <li className="p-2">Sports Luxe</li>
              </ul>
            </li>
            <li className="py-1">
              <div className="flex justify-between">
                <Link
                  className="flex justify-between font-medium"
                  href="/accessory"
                  aria-current="page"
                >
                  PHỤ KIỆN
                </Link>

                <span
                  className="flex items-center justify-center submenu-toggle"
                  onClick={() => submenuToggle(1)}
                >
                  <GoChevronDown />
                </span>
              </div>
              <ul
                className={`px-2 submenu-mobile ${submenus[1] ? "active" : ""}`}
              >
                <li className="p-2">Apple Watch Strap</li>
              </ul>
            </li>
            <li className="py-1">
              <div className="flex justify-between">
                <Link
                  className="flex justify-between font-medium"
                  color="foreground"
                  href="/collection"
                >
                  Bài viết
                </Link>
                <span
                  className="flex items-center justify-center submenu-toggle"
                  onClick={() => submenuToggle(2)}
                >
                  <GoChevronDown />
                </span>
              </div>
              <ul
                className={`px-2 submenu-mobile ${submenus[2] ? "active" : ""}`}
              >
                <li className="p-2">Tin tức</li>
                <li className="p-2">Khuyến mãi</li>
              </ul>
            </li>
            <li className="font-medium py-1">
              <Link href={"/"}>Đăng nhập/Đăng ký</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
