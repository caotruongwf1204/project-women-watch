"use client";

import { CiSearch } from "react-icons/ci";
import "@/app/css/filter-products.css";
import { useEffect, useState } from "react";
import Link from "next/link";





export default function FilterProducts() {
  const [isWidget, setWidget] = useState([false, false]);


  const handleClick = (index: number): void => {
    setWidget((prevWidget) =>
      prevWidget.map((widget, i) => (i === index ? !widget : false))
    );

  };

  useEffect(() => {
    setWidget([window.location.pathname === "/collection", window.location.pathname === "/accessory"]);
  }, [window.location.pathname]);

  

  return (
    <div className="lg:w-3/12 px-3 filter-widget">
      <h1 className="text-2xl font-normal">Tìm kiếm</h1>
      <div className="shop-search mt-6 mb-12">
        <form className="shop-search-form flex p-3">
          <input
            className="shop-search-input"
            type="text"
            placeholder="Tìm kiếm..."
          />
          <button className="shop-search-btn" type="submit">
            <CiSearch />
          </button>
        </form>
      </div>
      <div className="shop-widget">
        <h1 className="text-2xl font-normal">Danh mục</h1>
        <ul className="mt-5">
          <li className="mb-3">
            <div className="shop-widget-check" onClick={() => handleClick(0)}>
              <span className={`check ${isWidget[0] ? "active" : ""}`}></span>
              <Link href={"/collection"}>ĐỒNG HỒ</Link>
              
            </div>
          </li>
          <li className="mb-3" onClick={() => handleClick(1)}>
            <div className="shop-widget-check">
              <span className={`check ${isWidget[1] ? "active" : ""}`}></span>
              <Link href={"/accessory"}>PHỤ KIỆN</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
