"use client";

import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import NextImage from "next/image";
import { FaRegUserCircle } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import "@/app/css/header.css";
import { MdOutlineMenu } from "react-icons/md";
import MenuMobile from "./menu-mobile";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHeaderFixed, setHeaderFixed] = useState(false);
  const [isUserDropdown, setUserDropdown] = useState(false);

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
        className={`header-container container flex items-center justify-between ${
          isHeaderFixed ? "header-fixed" : ""
        }`}
      >
        <Link className="link-logo" href={"/"}>
          <NextImage
            width={170}
            height={100}
            className="w-full h-auto object-cover img-logo"
            alt="logo"
            src="/logo.webp"
          />
        </Link>

        <div className="header-search">
          <form className="search-form">
            <input
              className="search-input"
              type="text"
              placeholder="Tìm kiếm..."
            />
            <button className="search-btn" type="submit">
              <CiSearch />
            </button>
          </form>
        </div>

        <div className="header-icons flex gap-3 text-2xl">
          <div className="account" onClick={toggleUserDropdown}>
            <button className="user">
              <FaRegUserCircle />
            </button>
            <div className={`user-dropdown ${isUserDropdown ? "active" : ""}`}>
              <ul className="p-2">
                <li className="account-link"><Link href={""}>Đăng nhập</Link></li>
                <li className="account-link"><Link href={""}>Đăng ký</Link></li>
              </ul>
            </div>
          </div>

          <Link href={""}>
            <BsBagCheck />
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
