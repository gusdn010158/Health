import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const MainNewContainer = styled.div`
  border-bottom: 2px solid black;
  border-top: 2px solid black;
  height: 450px;
  box-sizing: border-box;
`;

const MainNewScroll = styled.div`
  display: flex;
  flex-direction: row;
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

function Productsmainbest({ apiEndpoint, big }) {
  const [bests, setBests] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/${apiEndpoint}`)
      .then((response) => response.json())
      .then((data) => setBests(data));
  }, [apiEndpoint]);

  return (
    <>
      {bests.map((bests) => (
        <>
          <BuigTitle>{bests.big}</BuigTitle>
          <MainNewContainer>
            <MainNewScroll>
              <MainBestItem key={bests.id}>
                <Link to={`/products/manentire/${bests.id}`}>
                  <img className="main_img1" src={bests.img} alt="img" />
                  <div className="main_text1">
                    <h2>{bests.name}</h2>
                    {bests.price}원
                  </div>
                </Link>
              </MainBestItem>
            </MainNewScroll>
          </MainNewContainer>
        </>
      ))}
    </>
  );
}

export default Productsmainbest;
