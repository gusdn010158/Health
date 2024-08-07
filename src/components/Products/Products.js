import "./Products.css";
import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Productsmain from "./Productsmain";
import Aids from "./Aids";
import ProductsList from "./ProductsList";
import Header from "../Header";

function Products() {
  const [isOpen, setMenu] = useState(false);
  const [isOpe, setMen] = useState(false);
  const [isOp, setMe] = useState(false);
  const [isO, setM] = useState(false);

  const toggleMenu = () => setMenu(!isOpen);
  const toggleMen = () => setMen(!isOpe);
  const toggleMe = () => setMe(!isOp);
  const toggleM = () => setM(!isO);
  return (
    <div className="Products">
      <Header />
      <aside className="aside_menu">
        <Link to="/Products" style={{ textDecoration: "none" }}>
          <h1 className="main_main">메인으로</h1>
        </Link>
        <div>
          <h3 className="main_man" onClick={toggleMenu}>
            남성의류
          </h3>
          <ul className={isOpen ? "show-menu" : "hide-menu"}>
            <Link to="Man" style={{ textDecoration: "none", color: "black" }}>
              <li className="show-menu1">전체</li>
            </Link>
            <Link to="MT" style={{ textDecoration: "none", color: "black" }}>
              <li className="show-menu1">상의</li>
            </Link>
            <Link to="MB" style={{ textDecoration: "none", color: "black" }}>
              <li className="show-menu1">하의</li>
            </Link>
            <Link
              to="MOUTER"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="show-menu1">아우터</li>
            </Link>
            <Link to="MSET" style={{ textDecoration: "none", color: "black" }}>
              <li className="show-menu1">세트</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="main_woman" onClick={toggleMen}>
            여성의류
          </h3>
          <ul className={isOpe ? "show" : "hide"}>
            <Link to="WOMAN" style={{ textDecoration: "none", color: "black" }}>
              <li className="show1">전체</li>
            </Link>
            <Link to="WLE" style={{ textDecoration: "none", color: "black" }}>
              <li className="show1">레깅스</li>
            </Link>
            <Link to="WJO" style={{ textDecoration: "none", color: "black" }}>
              <li className="show1">조거팬츠</li>
            </Link>
            <Link
              to="WOUTER"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="show1">아우터</li>
            </Link>
            <Link to="WB" style={{ textDecoration: "none", color: "black" }}>
              <li className="show1">하의</li>
            </Link>
            <Link to="WT" style={{ textDecoration: "none", color: "black" }}>
              <li className="show1">상의</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="main_aids" onClick={toggleMe}>
            보조기구
          </h3>
          <ul className={isOp ? "sho" : "hid"}>
            <Link to="AIDS" style={{ textDecoration: "none", color: "black" }}>
              <li className="sho1">전체</li>
            </Link>
            <Link to="BELT" style={{ textDecoration: "none", color: "black" }}>
              <li className="sho1">벨트</li>
            </Link>
            <Link to="STRAP" style={{ textDecoration: "none", color: "black" }}>
              <li className="sho1">스트랩</li>
            </Link>
            <Link to="MET" style={{ textDecoration: "none", color: "black" }}>
              <li className="sho1">매트</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="main_aids" onClick={toggleM}>
            헬스장
          </h3>
          <ul className={isO ? "sho" : "hid"}>
            <Link
              to="Health"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="sho1">헬스장</li>
            </Link>
            <Link
              to="Pilates"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="sho1">필라테스</li>
            </Link>
            <Link to="Yoga" style={{ textDecoration: "none", color: "black" }}>
              <li className="sho1">요가</li>
            </Link>
          </ul>
        </div>
      </aside>

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

export default Products;
