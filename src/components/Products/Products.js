import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Productsmain from "./Productsmain";
import Aids from "./Aids";
import ProductsList from "./ProductsList";
import Header from "../Header";
import styled from "styled-components";

const ProductsWrapper = styled.div`
  overflow-y: scroll;
  height: 950px;
  background-image: url("../img/showingpage.png");

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #cfd3da;
    background-clip: padding-box;
    border: 5px solid transparent;
    border-radius: 30px;
  }

  ::-webkit-scrollbar-track {
    background-color: #ffff;
  }
`;

const StyledAsideMenu = styled.aside`
  top: 60px;
  width: 15%;
  height: 1400px;
  background-color: white;
  margin: 0px;
  position: fixed;
`;

const MainMain = styled.h1`
  font-family: "oneFontTitle";
  color: #ffff;
  font-size: 25px;
  margin-top: 0px;
  display: flex;
  background-color: #6140a0;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const DropdownMenuWrapper = styled.div``;

const MainTitle = styled.h3`
  font-family: "oneFontTitle";
  background-color: #b98eff;
  margin-top: 0px;
  color: #ffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

const ShowMenu = styled.ul`
  background-color: #ffff;
  padding: 0;
  margin: 0;
  width: 100%;
  position: relative;
  left: 0px;
  transition: 0.1s;
`;

const MenuItem = styled.li`
  list-style: none;
  font-family: "oneFont";
  &:hover {
    background-color: #e5c7fb;
  }
`;

const HideMenu = styled.ul`
  opacity: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 0px;
  position: relative;
  left: -150px;
  transition: 0.1s;
`;

function Products() {
  return (
    <ProductsWrapper>
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
    </ProductsWrapper>
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
    <StyledAsideMenu>
      <Link to="/Products" style={{ textDecoration: "none" }}>
        <MainMain>메인으로</MainMain>
      </Link>
      {menus.map((menu, index) => (
        <DropdownMenu key={index} title={menu.title} items={menu.items} />
      ))}
    </StyledAsideMenu>
  );
}

function DropdownMenu({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <DropdownMenuWrapper>
      <MainTitle onClick={toggleMenu}>{title}</MainTitle>
      {isOpen ? (
        <ShowMenu>
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>{item.label}</MenuItem>
            </Link>
          ))}
        </ShowMenu>
      ) : (
        <HideMenu />
      )}
    </DropdownMenuWrapper>
  );
}

export default Products;
