import "./Products.css";
import React from "react";

import { FiSearch } from "react-icons/fi";

import { AiFillShopping } from "react-icons/ai";

import logo from "../img/mainlogo.jpg";

import { useState } from "react";
import { Link } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import Productsmain from "./Productsmain";

import Aids from "./Aids";

import ProductsList from "./ProductsList"; // 공통 컴포넌트 임포트

function Products() {
  const [isOpen, setMenu] = useState(false);
  const [isOpe, setMen] = useState(false);
  const [isOp, setMe] = useState(false);

  const toggleMenu = () => setMenu(!isOpen);
  const toggleMen = () => setMen(!isOpe);
  const toggleMe = () => setMe(!isOp);

  return (
    <div className="Products">
      <div className="Sheader1">
        <div className="Sheader">
          <div className="s_logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="s_input">
            <input placeholder="원하시는 상품을 검색해 보세요" />
            <button>
              <FiSearch size="22" />
            </button>
          </div>
          <div className="s_login">
            <Link to="/Cart" style={{ textDecoration: "none", color: "black" }}>
              <AiFillShopping size="33" />
            </Link>
            <Link
              to="/Login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="s_log">LOGIN</div>
            </Link>
            <Link
              to="/Signup"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="s_log">SIGN UP</div>
            </Link>
          </div>
        </div>
      </div>

      <aside className="aside_menu">
        <Link to="/Products" style={{ textDecoration: "none" }}>
          <h1 className="main_main">메인으로</h1>
        </Link>
        <div>
          <h3 className="main_man" onClick={toggleMenu}>
            남성의류
          </h3>
          <ul className={isOpen ? "show-menu" : "hide-menu"}>
            <Link
              to="manentire"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="show-menu1">전체</li>
            </Link>
            <Link
              to="mantop"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="show-menu1">상의</li>
            </Link>
            <Link
              to="manpants"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="show-menu1">하의</li>
            </Link>
            <Link
              to="manouter"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="show-menu1">아우터</li>
            </Link>
            <Link
              to="manset"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="show-menu1">세트</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="main_woman" onClick={toggleMen}>
            여성의류
          </h3>
          <ul className={isOpe ? "show" : "hide"}>
            <Link
              to="wentire"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="show1">전체</li>
            </Link>
            <Link
              to="wleggings"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="show1">레깅스</li>
            </Link>
            <Link
              to="wjogger"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="show1">조거팬츠</li>
            </Link>
            <Link
              to="wouter"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="show1">아우터</li>
            </Link>
            <Link
              to="wpants"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="show1">하의</li>
            </Link>
            <Link to="wtops" style={{ textDecoration: "none", color: "black" }}>
              <li className="show1">상의</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="main_aids" onClick={toggleMe}>
            보조기구
          </h3>
          <ul className={isOp ? "sho" : "hid"}>
            <Link
              to="Aidsentire"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="sho1">전체</li>
            </Link>
            <Link to="Belt" style={{ textDecoration: "none", color: "black" }}>
              <li className="sho1">벨트</li>
            </Link>
            <Link to="Strap" style={{ textDecoration: "none", color: "black" }}>
              <li className="sho1">스트랩</li>
            </Link>
            <Link to="Mat" style={{ textDecoration: "none", color: "black" }}>
              <li className="sho1">매트</li>
            </Link>
          </ul>
        </div>
        <div>
          <Link
            to="Aids/gym"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h3 className="main_gym">헬스장</h3>
          </Link>
        </div>
      </aside>

      <Routes>
        <Route path="/*" element={<Productsmain />} />
        <Route
          path="/manentire/*"
          element={<ProductsList apipoint="massage" />}
        />
        <Route path="/mantop" element={<ProductsList apipoint="products" />} />
        <Route path="/manpants" element={<ProductsList apipoint="massage" />} />
        <Route
          path="/manouter"
          element={<ProductsList apipoint="products" />}
        />
        <Route path="/manset" element={<ProductsList apipoint="massage" />} />
        <Route path="/wentire" element={<ProductsList apipoint="products" />} />
        <Route
          path="/wleggings"
          element={<ProductsList apipoint="massage" />}
        />
        <Route path="/wjogger" element={<ProductsList apipoint="products" />} />
        <Route path="/wouter" element={<ProductsList apipoint="massage" />} />
        <Route path="/wpants" element={<ProductsList apipoint="products" />} />
        <Route path="/wtops" element={<ProductsList apipoint="massage" />} />
        <Route
          path="/Aidsentire"
          element={<ProductsList apipoint="products" />}
        />
        <Route path="/Belt" element={<ProductsList apipoint="massage" />} />
        <Route path="/Strap" element={<ProductsList apipoint="products" />} />
        <Route path="/Mat" element={<ProductsList apipoint="massage" />} />
        <Route path="/Aids/*" element={<Aids />} />
      </Routes>
    </div>
  );
}

export default Products;
