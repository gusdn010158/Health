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

        <Productsmainbest apiEndpoint="products" big="Best" />

        <Prototype />
        <Productsmainbest apiEndpoint="massage" big="New" />
      </Advertisement>
    </Productsmai>
  );
}

export default Productsmain;

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
