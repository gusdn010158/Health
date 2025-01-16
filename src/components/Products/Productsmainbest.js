import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../../json-server/db.json";
const MainBestItem = styled.div`
  min-width: 282px;
  margin: 20px;

  a {
    text-decoration: none;
    color: black;
  }

  .main_img1 {
    width: 250px;
    height: 310px;
    border-radius: 10px;
    background-color: gray;
    box-shadow: 5px 5px 5px 5px gray;
  }

  .main_text1 {
    h2 {
      font-family: "oneFontTitle";
      margin-top: 20px;
    }
  }
`;

const BuigTitle = styled.h1`
  font-family: "oneFontTitle";
  margin: 20px;
`;

const Bidd = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 300px;
`;
const FEG = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cfd3da;
    background-clip: padding-box;
    border: 5px solid transparent;
    border-radius: 30px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffff;
  }
`;

function Productsmainbest({ apiEndpoint }) {
  const [bests, setBests] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:4000/${apiEndpoint}`)
  //     .then((response) => response.json())
  //     .then((data) => setBests(data));
  // }, [apiEndpoint]);
  useEffect(() => {
    if (data[apiEndpoint]) {
      setBests(data[apiEndpoint]);
    }
  }, [apiEndpoint]);
  return (
    <FEG>
      {bests.map((bests) => (
        <Bidd>
          <BuigTitle>{bests.big}</BuigTitle>

          <MainBestItem key={bests.id}>
            <Link to={`/products/manentire/${bests.id}`}>
              <img className="main_img1" src={bests.img} alt="img" />
              <div className="main_text1">
                <h2>{bests.name}</h2>
                {bests.price}원
              </div>
            </Link>
          </MainBestItem>
        </Bidd>
      ))}
    </FEG>
  );
}

export default Productsmainbest;
