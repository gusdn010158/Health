import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import data from "../../json-server/db.json";
import styled from "styled-components";

const DetailsWrapper = styled.div`
  background-color: #ffff;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
`;

const DetailBody = styled.div`
  box-sizing: border-box;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailBodyCenter = styled.div`
  display: flex;
  align-items: center;
  height: 85%;
  width: 70%;
`;

const CenterRight = styled.div`
  box-sizing: border-box;
  border-radius: 35px;
  height: 80%;
  width: 47%;
  margin-right: 6%;
  box-shadow: 0px 11px 30px 8px rgba(0, 0, 0, 0.25);
  background-color: gray;
`;

const CenterRightImg = styled.img`
  box-sizing: border-box;
  border-radius: 35px;
  height: 100%;
  width: 100%;
  margin-right: 6%;
  box-shadow: 0px 11px 30px 8px rgba(0, 0, 0, 0.25);
  background-color: gray;
`;

const CenterLeft = styled.div`
  width: 47%;
  height: 80%;
`;

const CenterLeftMiniName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const CenterLeftTitle = styled.h2`
  height: 40%;
  margin-top: 20px;
`;

const CenterLeftT = styled.div`
  font-size: 14px;
  color: gray;
`;

const CenterLeftNum = styled.div`
  display: flex;
  height: 10%;
  width: 30%;
  box-sizing: border-box;
  align-items: center;
  border: 1px solid gray;
`;

const CenterLeftNumButton = styled.button`
  border: 1px 1px 0px 1px solid gray;
  width: 100%;
  height: 100%;
  font-size: 40px;
`;

const CenterLeftSum = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CenterLeftLast = styled.div`
  display: flex;
  color: rgb(55, 169, 35);
`;

const LastLeft = styled.div`
  border: 1px 1px solid gray;
`;

const CenterLeftButton = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  height: 10%;
`;

const ButtonLeft = styled.button`
  border-radius: 5px;
  color: white;
  font-size: 30px;
  font-weight: 700;
  background-color: rgb(55, 169, 35);
  width: 70%;
  height: 100%;
`;

const ButtonRight = styled.button`
  color: white;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.25);
  width: 20%;
  height: 100%;
`;

function Details() {
  const { apipoint, id } = useParams();
  const [entires, setEntires] = useState(null);
  const [quantity, setQuantity] = useState(0);

  // 로컬 JSON 데이터에서 원하는 항목을 필터링
  useEffect(() => {
    if (data[apipoint]) {
      const item = data[apipoint].find((product) => product.id === id);
      setEntires(item || null); // id가 일치하는 항목이 없을 경우 null로 설정
    } else {
      console.error(`Category "${apipoint}" does not exist in data.`);
      setEntires(null);
    }
  }, [apipoint, id]);

  if (!entires) {
    return <div>Loading...</div>;
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <DetailsWrapper>
      <Header />
      <DetailBody>
        <DetailBodyCenter>
          <CenterRight>
            <CenterRightImg
              className="center_right_img"
              src={entires.img}
              alt="img"
            />
          </CenterRight>
          <CenterLeft>
            <CenterLeftMiniName>임욱 상사</CenterLeftMiniName>
            <CenterLeftTitle>{entires.name}</CenterLeftTitle>
            <CenterLeftT>택배 배송/ 무료 배송</CenterLeftT>
            <hr />
            <CenterLeftNum>
              <CenterLeftNumButton onClick={decrementQuantity}>
                -
              </CenterLeftNumButton>
              <div>{quantity}</div>
              <CenterLeftNumButton onClick={incrementQuantity}>
                +
              </CenterLeftNumButton>
            </CenterLeftNum>
            <hr />
            <CenterLeftSum>
              <div>총 상품 금액</div>
              <CenterLeftLast>
                <LastLeft>총 수량 {quantity}개</LastLeft>
                <h4>{entires.price * quantity}원</h4>
              </CenterLeftLast>
            </CenterLeftSum>
            <CenterLeftButton>
              <ButtonLeft>바로 구매</ButtonLeft>
              <ButtonRight>장바구니</ButtonRight>
            </CenterLeftButton>
          </CenterLeft>
        </DetailBodyCenter>
      </DetailBody>
    </DetailsWrapper>
  );
}

export default Details;
