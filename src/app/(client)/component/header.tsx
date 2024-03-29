"use client";

import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import NextImage from "next/image";
import { PiUserCircleThin } from "react-icons/pi";
import { PiShoppingBagThin } from "react-icons/pi";
import "@/app/css/header.css";
import { MdOutlineMenu } from "react-icons/md";
import MenuMobile from "./menu-mobile";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

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

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHeaderFixed, setHeaderFixed] = useState(false);
  const [isUserDropdown, setUserDropdown] = useState(false);

  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(`/search?q=${search.trim()}`);
  };

  const cartItems: CartItem[] = useSelector(
    (state: RootState) => state.cart.items
  );
  const totalItem = cartItems.length;

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleUserDropdown = () => {
    setUserDropdown(!isUserDropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth <= 1024;

      if (isMobile) {
        setHeaderFixed(scrollY > 50);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header flex items-center justify-center pt-3">
      <div
        className={`header-container flex items-center justify-between ${
          isHeaderFixed ? "header-fixed" : ""
        }`}
      >
        <Link className="link-logo" href={"/"}>
          <NextImage
            priority={true}
            width={170}
            height={100}
            className="object-cover"
            alt="logo"
            src="/logo.webp"
          />
        </Link>

        <div className="header-search">
          <form onSubmit={handleSearch} className="search-form">
            <input
              className="search-input"
              type="text"
              placeholder="Tìm kiếm..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="search-btn" type="submit">
              <CiSearch />
            </button>
          </form>
        </div>

        <div className="header-icons flex gap-3 text-2xl">
          <div className="account" onClick={toggleUserDropdown}>
            <button className="user flex items-center justify-center">
              <PiUserCircleThin />
            </button>
            <div className={`user-dropdown ${isUserDropdown ? "active" : ""}`}>
              <ul className="p-2">
                <li className="account-link">
                  <Link className="w-full" href={"/login"}>
                    Đăng nhập
                  </Link>
                </li>
                <li className="account-link">
                  <Link className="w-full" href={"/register"}>
                    Đăng ký
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link
            className="cart-icon flex items-center justify-center"
            href={"/cart"}
          >
            <PiShoppingBagThin />
            <span className="cart-change">{totalItem}</span>
          </Link>

          <div className="menu-mobile-toggle hidden" onClick={toggleMenu}>
            <MdOutlineMenu />
          </div>
        </div>
      </div>
      <MenuMobile isOpen={isMenuOpen} onClose={closeMenu}></MenuMobile>
    </header>
  );
}
