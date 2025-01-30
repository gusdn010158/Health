import React, { useEffect, useState } from "react";
import data from "../../json-server/db.json";
import styled from "styled-components";

const AidsWrapper = styled.div`
  padding-left: 15%;
  padding-top: 100px;
  width: 100%;
  height: 1150px;
  display: flex;
  flex-direction: column;
`;

const RapHead = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const RapHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const RapHr = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  height: 8px;
  background-color: #b98eff;
  margin-left: 180px;
  margin-right: 180px;
`;

const Title = styled.h1`
  font-family: "oneFontTitle";
`;

const SelectWrapper = styled.div`
  margin-right: 40px;
  display: flex;
  justify-content: flex-end;
`;

const AidMain = styled.div`
  display: flex;
  width: 1600px;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    width: auto;
  }
`;

const RapMain = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 300px;
  width: 250px;
  margin: 35px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px gray;
  background-image: linear-gradient(#b98eff, white);
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
  }
  @media (max-width: 960px) {
    flex-direction: column;
    margin: 69px;
  }
`;

const RapMainImg = styled.img`
  padding: 15px;
  border-radius: 5px;
  height: 65%;
  width: 100%;
  object-fit: cover;
  display: flex;
`;

const RapMainName = styled.div`
  font-family: "oneFontTitle";
  height: 100%;
  display: flex;
  width: 30%;
`;

const RapMainPrice = styled.div`
  font-family: "oneFontTitle";
  font-size: small;
`;

const RapMainPlus = styled.div`
  width: 100%;
  height: 50px;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RapMainButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15%;
`;

const RMainButton = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 10px;
  background-color: #b98eff;
  font-family: "oneFontTitle";
  color: white;
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
  }
`;

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
`;

const PagingBtn = styled.a`
  margin: 0 5px;
  cursor: pointer;
  padding: 10px;
`;

const Aids = ({ point, name }) => {
  const [aiddata, setAidData] = useState([]);
  const totalPages = 4;

  useEffect(() => {
    if (data[point]) {
      setAidData(data[point]);
    }
  }, [point]);

  return (
    <AidsWrapper>
      <RapHead>
        <RapHr />
        <RapHeader>
          <Title>-{name}-</Title>
        </RapHeader>

        <SelectWrapper>
          <select>
            <option>추천순</option>
            <option>가나다순</option>
            <option>최신순</option>
          </select>
        </SelectWrapper>
      </RapHead>

      <AidMain>
        {aiddata.map((item) => (
          <RapMain key={item.id}>
            <RapMainImg src={item.img} alt="img" />
            <RapMainPlus>
              <RapMainName>{item.name}</RapMainName>
              <RapMainPrice>
                {item.local} {item.price}원
              </RapMainPrice>
            </RapMainPlus>
            <RapMainButton>
              <RMainButton
                onClick={() => window.open("https://jamaicaseoul.modoo.at/")}
              >
                링크 바로가기
              </RMainButton>
            </RapMainButton>
          </RapMain>
        ))}
      </AidMain>

      <PaginationBox>
        {Array.from({ length: totalPages }, (_, index) => (
          <PagingBtn key={index}>{index + 1}</PagingBtn>
        ))}
      </PaginationBox>
    </AidsWrapper>
  );
};

export default Aids;
