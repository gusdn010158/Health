import React, { useEffect, useState } from "react";
import Header from "./Header";
import ImageSlider from "./ImageSlide";
import about_hl from "./img/about_hl.png";
import midBanner from "./img/banner.jpeg";
import logo_mean_left from "./img/logo_mean_left.jpeg";
import logo_mean_right from "./img/logo_mean_right.jpeg";
import "./MainPage.css";

const MainPage = () => {
  const [Visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      });
    });

    const targets = document.querySelectorAll(
      ".logo_mean_left, .logo_mean_right"
    );

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
    <div className="MainPage">
      <Header />
      <ImageSlider />
      <img className="about_hl" src={about_hl} alt="about_hl" />
      <img className="mid_banner" src={midBanner} alt="mid_banner" />
      <div className="logos">
        <div className={`logo_mean_left ${Visible ? "o" : ""}`}>
          <img src={logo_mean_left} alt="logo_meaning_left" />
        </div>
        <div className={`logo_mean_right ${Visible ? "o" : ""}`}>
          <img src={logo_mean_right} alt="logo_mean_right" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
