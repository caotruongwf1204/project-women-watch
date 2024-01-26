"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PiUserCircleThin } from "react-icons/pi";
import { PiShoppingBagThin } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import NextImage from "next/image";
import { GoChevronDown } from "react-icons/go";
import "@/app/css/navigation.css";
import { useSelector } from "react-redux";

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

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserDropdown, setUserDropdown] = useState(false);
  const cartItems: CartItem[] = useSelector(
    (state: RootState) => state.cart.items
  );
  const totalItem = cartItems.length;

  const toggleUserDropdown = () => {
    setUserDropdown(!isUserDropdown);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      className={`${
        isScrolled ? "scrolled" : ""
      } navbar flex items-center justify-center`}
    >
      <div className="container">
        <div
          className={`row flex items-center justify-center ${
            isScrolled ? "main-menu" : ""
          }`}
        >
          <div className={`nav-logo ${isScrolled ? "visible" : ""}`}>
            <Link className="link logo" href={"/"}>
              <NextImage
                width={170}
                height={100}
                className="w-full h-auto object-cover"
                alt="logo"
                src="/logo.webp"
              />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              className="navigation flex items-center justify-center gap-2 h-12"
              color="foreground"
              href="/collection"
            >
              ĐỒNG HỒ <GoChevronDown />
              <ul className="submenu">
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
                  <Link href={`/collection?category=selestial`}>Selestial</Link>
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
            </Link>

            <Link
              className="navigation flex items-center justify-center gap-2 h-12"
              href="/accessory"
              aria-current="page"
            >
              PHỤ KIỆN <GoChevronDown />
              <ul className="submenu">
                <li>
                  <Link href={`/accessory?category=apple watch strap`}>
                    Apple Watch Strap
                  </Link>
                </li>
              </ul>
            </Link>

            <Link
              className="flex items-center justify-center gap-2 h-12"
              color="foreground"
              href="/collection"
            >
              BÀI VIẾT <GoChevronDown />
            </Link>
          </div>
          <div
            className={`nav-icons flex gap-3 text-xl ${
              isScrolled ? "visible" : ""
            }`}
          >
            <div className="account" onClick={toggleUserDropdown}>
              <button className="user">
                <PiUserCircleThin />
              </button>
              <div
                className={`user-dropdown ${isUserDropdown ? "active" : ""}`}
              >
                <ul className="p-2">
                  <li className="account-link">
                    <Link href={"/login"}>Đăng nhập</Link>
                  </li>
                  <li className="account-link">
                    <Link href={"/register"}>Đăng ký</Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link href={""}>
              <IoIosHeartEmpty />
            </Link>

            <Link className="cart-icon" href={"/cart"}>
              <PiShoppingBagThin />
              <span className="cart-change">{totalItem}</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
