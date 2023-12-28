"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PiUserCircleThin } from "react-icons/pi";
import { PiShoppingBagThin } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import NextImage from "next/image";
import { GoChevronDown } from "react-icons/go";
import "@/app/css/navigation.css";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserDropdown, setUserDropdown] = useState(false);

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
                <li>Bee</li>
                <li>wonderland</li>
                <li>Classic</li>
                <li>Celestial</li>
                <li>Rainbow</li>
                <li>Floral</li>
                <li>Sports Luxe</li>
              </ul>
            </Link>

            <Link
              className="navigation flex items-center justify-center gap-2 h-12"
              href="/accessory"
              aria-current="page"
            >
              PHỤ KIỆN <GoChevronDown />
              <ul className="submenu">
                <li>Apple Watch Strap</li>
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
                    <Link href={""}>Đăng nhập</Link>
                  </li>
                  <li className="account-link">
                    <Link href={""}>Đăng ký</Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link href={""}>
              <IoIosHeartEmpty />
            </Link>

            <Link href={""}>
              <PiShoppingBagThin />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
