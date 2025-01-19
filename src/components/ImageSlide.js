import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ad_1 from "./img/ad_1.png";
import ad_2 from "./img/ad_2.png";
import "./MainPage.css";
import styled from "styled-components";
const ImageSlider = () => {
  return (
    <ImageSlide>
      <Carousel>
        <Carousel.Item>
          <Dblock src={ad_1} alt="image1" />
        </Carousel.Item>
        <Carousel.Item>
          <Dblock src={ad_2} alt="image2" />
        </Carousel.Item>
      </Carousel>
    </ImageSlide>
  );
};
export default ImageSlider;

const Dblock = styled.img`
  width: 100vw;
  object-fit: cover;
  height: 600px;
`;

const ImageSlide = styled.div`
  width: 100vw;
`;
