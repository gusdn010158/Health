import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import ImageSlider from "./ImageSlide";
import about_hl from "./img/about_hl.png";
import midBanner from "./img/banner.jpeg";
import logo_mean_left from "./img/logo_mean_left.jpeg";
import logo_mean_right from "./img/logo_mean_right.jpeg";

const MainContainer = styled.div`
  height: 950px;
  overflow: scroll;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const LogosContainer = styled.div`
  display: flex;
  width: 100vw;
`;

const Logo = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
  opacity: 0;
  transform: ${({ isVisible, direction }) =>
    isVisible
      ? "translateX(0)"
      : direction === "left"
      ? "translateX(-150px)"
      : "translateX(100px)"};
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};

  img {
    width: 100%;
  }
`;

const MidBanner = styled(StyledImage)`
  margin-bottom: 50px;
`;

const AboutHL = styled(StyledImage)`
  margin-top: 50px;
`;

const MainPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    });

    const targets = document.querySelectorAll(".logo_left, .logo_right");

    targets.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      targets.forEach((target) => {
        observer.unobserve(target);
      });
    };
  }, []);

  return (
    <MainContainer>
      <Header />
      <ImageSlider />
      <AboutHL src={about_hl} alt="about_hl" />
      <MidBanner src={midBanner} alt="mid_banner" />
      <LogosContainer>
        <Logo className="logo_left" isVisible={isVisible} direction="left">
          <img src={logo_mean_left} alt="logo_meaning_left" />
        </Logo>
        <Logo className="logo_right" isVisible={isVisible} direction="right">
          <img src={logo_mean_right} alt="logo_mean_right" />
        </Logo>
      </LogosContainer>
    </MainContainer>
  );
};

export default MainPage;
