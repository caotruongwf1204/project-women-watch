"use client";

import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import "@/app/css/menu-mobile.css";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdSearch } from "react-icons/io";

interface MenuMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuMobile({ isOpen, onClose }: MenuMobileProps) {
  const [submenus, setSubmenus] = useState([false, false, false]);

  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(`/search?q=${search.trim()}`);
  };

  const submenuToggle = (index: number): void => {
    setSubmenus((prevSubmenus) =>
      prevSubmenus.map((submenu, i) => (i === index ? !submenu : false))
    );
  };
  return (
    <div className={`menu-mobile ${isOpen ? "show-menu-mobile" : ""}`}>
      <div className="bg-mobile w-full absolute h-full" onClick={onClose}></div>

      <div className="menu-mobile-show absolute overflow-y-auto">
        <span className="close-btn">
          <TfiClose onClick={onClose} />
        </span>
        <div className="mobile-search">
          <form onSubmit={handleSearch} className="mobile-search-form">
            <input
              className="mobile-input-search"
              type="text"
              placeholder="Tìm kiếm..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={onClose} className="search-btn p-1" type="submit">
              <CiSearch />
            </button>
          </form>
        </div>
        <div className="mobile-navigation">
          <ul>
            <li className="font-medium py-1">
              <Link href={"/"} onClick={onClose}>
                Trang chủ
              </Link>
            </li>
            <li className="py-1">
              <div className="flex justify-between">
                <Link
                  className="font-medium"
                  color="foreground"
                  href="/collection"
                  onClick={onClose}
                >
                  ĐỒNG HỒ
                </Link>
                <span
                  className="flex items-center justify-center submenu-toggle"
                  onClick={() => submenuToggle(0)}
                >
                  <GoChevronDown
                    className={`icon-mobile ${submenus[0] ? "active" : ""}`}
                  />
                </span>
              </div>
              <ul
                onClick={onClose}
                className={`px-2 submenu-mobile ${submenus[0] ? "active" : ""}`}
              >
                <li className="p-2">
                  <Link href={`/collection?category=bee`}>Bee</Link>
                </li>
                <li className="p-2">
                  <Link href={`/collection?category=wonderland`}>
                    Wonderland
                  </Link>
                </li>
                <li className="p-2">
                  <Link href={`/collection?category=classic`}>Classic</Link>
                </li>
                <li className="p-2">
                  <Link href={`/collection?category=celestial`}>Celestial</Link>
                </li>
                <li className="p-2">
                  <Link href={`/collection?category=rainbow`}>Rainbow</Link>
                </li>
                <li className="p-2">
                  <Link href={`/collection?category=floral`}>Floral</Link>
                </li>
                <li className="p-2">
                  <Link href={`/collection?category=sports luxe`}>
                    Sports Luxe
                  </Link>
                </li>
              </ul>
            </li>
            <li className="py-1">
              <div className="flex justify-between">
                <Link
                  className="flex justify-between font-medium"
                  href="/accessory"
                  aria-current="page"
                  onClick={onClose}
                >
                  PHỤ KIỆN
                </Link>

                <span
                  className="flex items-center justify-center submenu-toggle"
                  onClick={() => submenuToggle(1)}
                >
                  <GoChevronDown
                    className={`icon-mobile ${submenus[1] ? "active" : ""}`}
                  />
                </span>
              </div>
              <ul
                onClick={onClose}
                className={`px-2 submenu-mobile ${submenus[1] ? "active" : ""}`}
              >
                <li className="p-2">
                  <Link href={`/accessory?category=apple watch strap`}>
                    Apple Watch Strap
                  </Link>
                </li>
              </ul>
            </li>
            <li className="py-1">
              <div className="flex justify-between">
                <Link
                  className="flex justify-between font-medium"
                  color="foreground"
                  href="/"
                  onClick={onClose}
                >
                  Bài viết
                </Link>
                <span
                  className="flex items-center justify-center submenu-toggle"
                  onClick={() => submenuToggle(2)}
                >
                  <GoChevronDown
                    className={`icon-mobile ${submenus[2] ? "active" : ""}`}
                  />
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
              <Link href={"/login"} onClick={onClose}>
                Đăng nhập/Đăng ký
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
