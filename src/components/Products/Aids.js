import React from "react";
import "./Aids.css";
import { Link, Route, Routes } from "react-router-dom";
import Rmain from "./Rmain";

const Aids = () => {
  return (
    <div className="Aids">
      <div className="rap_head">
        <div className="rap_hr"></div>
        <div className="rap_header">
          <h1>-헬스장 바로가기-</h1>
        </div>
        <ul>
          <Link to="gym" style={{ textDecoration: "none", color: "black" }}>
            <li className="line">헬스장</li>
          </Link>
          <Link to="Pilates" style={{ textDecoration: "none", color: "black" }}>
            <li className="line">필라테스</li>
          </Link>
          <Link to="Golf" style={{ textDecoration: "none", color: "black" }}>
            <li className="line">골프</li>
          </Link>
          <Link to="Yoga" style={{ textDecoration: "none", color: "black" }}>
            <li>요가</li>
          </Link>
        </ul>
        <div className="rap_select">
          <select>
            <option>추천순</option>
            <option>가나다순</option>
            <option>최신순</option>
          </select>
        </div>
      </div>
      <Routes>
        <Route path="Products/Health/:apipoint" element={<Rmain />} />
      </Routes>
      <div className="pagination-box">
        <a className="paging_btn">1</a>
        <a className="paging_btn">2</a>
        <a className="paging_btn">3</a>
        <a className="paging_btn">4</a>
      </div>
    </div>
  );
};

export default Aids;
