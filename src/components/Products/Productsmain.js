import React from "react";
import img from "../img/showingpage.png";
import advertisement from "../img/coad.jpg";
import Productsmainbest from "./Productsmainbest";
import styled from "styled-components";

function Productsmain() {
  return (
    <Productsmai>
      <Advertisement>
        <img src={advertisement} alt="advertisement" />
        <BuigTitle>Best</BuigTitle>
        <Productsmainbest apiEndpoint="products" />

        <Prototype />
        <BuigTitle>New</BuigTitle>
        <Productsmainbest apiEndpoint="massage" />
      </Advertisement>
    </Productsmai>
  );
}

export default Productsmain;
const BuigTitle = styled.h1`
  font-family: "oneFontTitle";
  margin: 20px;
`;
const Productsmai = styled.div`
  padding-left: 15%;
  background-color: #ffff;
  width: 100%;
  height: 2000px;
  display: flex;
  flex-direction: column;
`;

const Advertisement = styled.div`
  background-color: #ffff;

  > img {
    width: 100%;
    height: 400px;
    background-size: cover;
  }
`;

const Prototype = styled.div`
  margin-top: 10px;
  height: 500px;
  width: 100%;
  background-attachment: fixed;
  background-size: cover;
  background-image: url(${img});
`;
