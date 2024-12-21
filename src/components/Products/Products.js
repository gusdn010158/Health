import "./Products.css";
import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Productsmain from "./Productsmain";
import Aids from "./Aids";
import ProductsList from "./ProductsList";
import Header from "../Header";

function Products() {
  return (
    <div className="Products">
      <Header />
      <AsideMenu />
      <Routes>
        <Route path="/" element={<Productsmain />} />
        <Route path="/:apipoint" element={<ProductsList />} />
        <Route path="/Health" element={<Aids point="Health" name="헬스장" />} />
        <Route
          path="/Pilates"
          element={<Aids point="Pilates" name="필라테스" />}
        />
        <Route path="/Yoga" element={<Aids point="Yoga" name="요가" />} />
      </Routes>
    </div>
  );
}

function AsideMenu() {
  const menus = [
    {
      title: "남성의류",
      items: [
        { path: "Man", label: "전체" },
        { path: "MT", label: "상의" },
        { path: "MB", label: "하의" },
        { path: "MOUTER", label: "아우터" },
        { path: "MSET", label: "세트" },
      ],
    },
    {
      title: "여성의류",
      items: [
        { path: "WOMAN", label: "전체" },
        { path: "WLE", label: "레깅스" },
        { path: "WJO", label: "조거팬츠" },
        { path: "WOUTER", label: "아우터" },
        { path: "WB", label: "하의" },
        { path: "WT", label: "상의" },
      ],
    },
    {
      title: "보조기구",
      items: [
        { path: "AIDS", label: "전체" },
        { path: "BELT", label: "벨트" },
        { path: "STRAP", label: "스트랩" },
        { path: "MET", label: "매트" },
      ],
    },
    {
      title: "헬스장",
      items: [
        { path: "Health", label: "헬스장" },
        { path: "Pilates", label: "필라테스" },
        { path: "Yoga", label: "요가" },
      ],
    },
  ];

  return (
    <aside className="aside_menu">
      <Link to="/Products" style={{ textDecoration: "none" }}>
        <h1 className="main_main">메인으로</h1>
      </Link>
      {menus.map((menu, index) => (
        <DropdownMenu key={index} title={menu.title} items={menu.items} />
      ))}
    </aside>
  );
}

function DropdownMenu({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <h3 className="main_title" onClick={toggleMenu}>
        {title}
      </h3>
      <ul className={isOpen ? "show-menu" : "hide-menu"}>
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            style={{ textDecoration: "none", color: "black" }}
          >
            <li className="menu_item">{item.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Products;
