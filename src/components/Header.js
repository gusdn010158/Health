import React, { useState } from "react";
import styled from "styled-components";
import logo from "./img/mainlogo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const TopBanner = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 100;
`;

const BannerLogo = styled.img`
  height: 60px;
`;

const ButtonItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const BannerButton = styled.button`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  background: none;
  border: none;
  cursor: pointer;
`;

const SearchForm = styled.div`
  display: flex;
  align-items: center;
`;

const InputForm = styled.input`
  background-color: white;
  width: 150px;
  border: none;
  border-bottom: 1px solid #000;
  margin-right: 10px;
`;

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };

  const buttonData = [
    { label: "PRODUCTS", path: "/Products" },
    { label: "COMMUNITY", path: "/Community" },
    { label: "PERSONAL", path: "/Personal" },
  ];

  return (
    <TopBanner>
      <Banner>
        <Link to="/">
          <BannerLogo src={logo} alt="logo" />
        </Link>
        <ButtonItems>
          <ButtonGroup>
            {buttonData.map((button) => (
              <BannerButton
                key={button.path}
                onClick={() => navigateTo(button.path)}
              >
                {button.label}
              </BannerButton>
            ))}
          </ButtonGroup>
          <ButtonGroup>
            <SearchForm>
              <InputForm placeholder="무엇이 궁금하세요?" />
              <BannerButton>
                <FiSearch />
              </BannerButton>
            </SearchForm>
            {isLoggedIn ? (
              <BannerButton onClick={() => setIsLoggedIn(false)}>
                LOG OUT
              </BannerButton>
            ) : (
              <>
                <BannerButton onClick={() => navigateTo("/SignUp")}>
                  SIGN UP
                </BannerButton>
                <BannerButton onClick={() => navigateTo("/LogIn")}>
                  LOG IN
                </BannerButton>
              </>
            )}
          </ButtonGroup>
        </ButtonItems>
      </Banner>
    </TopBanner>
  );
}
