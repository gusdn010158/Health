import { React } from "react";

import Cmain_map from "./Cmain_map";
import { Link, Route, Routes } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Cbest from "./Cbest";
import styled from "styled-components";
import backpage from "../img/backpage.jpg";
import ad3 from "../img/ad_3.jpg";
const StyledCmain = styled.div`
  width: 100%;
  height: 980px;
  display: flex;
  justify-content: center;
  background-image: url(${backpage});
  background-size: cover;
  background-attachment: fixed;
  overflow: scroll;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

const CmainMain = styled.div`
  width: 70%;
  height: 1200px;
  background-color: #ffff;
  @media (max-width: 1615px) {
    width: 100%;
  }
  @media (max-width: 1066px) {
    height: 1700px;
  }
  @media (max-width: 960px) {
    width: 100%;
    height: 2500px;
  }
`;

const CmainAb = styled.div`
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    height: 380px;
  }
  @media (max-width: 900px) {
    height: 260px;
  }
`;

const CmainA = styled.div`
  height: 360px;
  width: 1300px;
  background-size: cover;
  background-image: url(${ad3});

  @media (max-width: 1230px) {
    height: 320px;
  }
  @media (max-width: 960px) {
    height: 280px;
  }
  @media (max-width: 900px) {
    height: 260px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
  height: 70px;

  > ul {
    margin: 0;
    list-style: none;
    @media (max-width: 960px) {
      padding: 0;
    }
  }

  ul li {
    position: relative;
  }

  .option_title {
    text-decoration: none;
    color: #8a8a8a;
    font-weight: bolder;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 10px;
    @media (max-width: 550px) {
      border-radius: 5px;
      padding: 5px;
      font-size: 12px;
    }
  }

  .options_container {
    display: none;
    position: absolute;
    padding: 0;
    width: 100%;
    background-color: white;
    text-decoration: none;
    color: #8a8a8a;
    box-shadow: 5px 5px 20px lightgray;

    a {
      text-decoration: none;
      color: #8a8a8a;
      padding: 10px;
    }
  }

  li:hover .options_container {
    display: block;
  }

  .option_parent:hover {
    background-color: #ccd7ff;
    border-radius: 0;
  }
`;

const BtnWrite = styled.button`
  color: #b98eff;
  font-weight: bolder;
  padding: 10px 0px;
  width: 80px;
  border: 1px solid lightgray;
  border-radius: 10px;

  &:hover {
    background-color: #b98eff;
    color: rgb(255, 255, 255);
    border: none;
  }
  @media (max-width: 550px) {
    padding: 7px 0px;
    font-size: 12px;
  }
`;

const CrudMap = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  > * {
    flex-shrink: 0;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
`;

const PagingBtn = styled.a`
  text-decoration: none;
  color: #b98eff;
  padding: 20px;
`;

const SearchPostInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  font-size: 14px;
`;

function Cmain() {
  const rule = ["근력강화", "식단조절", "체중감량량"];
  return (
    <StyledCmain>
      <CmainMain>
        <CmainAb>
          <CmainA />
        </CmainAb>
        <SearchContainer>
          <ul>
            <li>
              <a className="option_title" href="/#">
                카테고리를 선택하세요
              </a>
              <ul className="options_container">
                {rule.map((item) => (
                  <li className="option_parent">
                    <a>{item}</a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <div>
            <SearchPostInput placeholder="무엇이 궁금하세요?" />
            <button>
              <FiSearch />
            </button>
          </div>
          <Link
            to="/Community/Cbest"
            style={{ textDecoration: "none", color: "black" }}
          >
            <BtnWrite>글쓰기</BtnWrite>
          </Link>
        </SearchContainer>
        <hr />
        <div>
          <div>
            <CrudMap>
              <Cmain_map />
            </CrudMap>
          </div>
        </div>

        <PaginationBox>
          {[1, 2, 3, 4].map((page) => (
            <PagingBtn>{page}</PagingBtn>
          ))}
        </PaginationBox>
      </CmainMain>

      <Routes>
        <Route path="Cbest" element={<Cbest />} />
      </Routes>
    </StyledCmain>
  );
}

export default Cmain;
