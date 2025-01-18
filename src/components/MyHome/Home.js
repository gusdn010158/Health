import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  background-color: #ffff;
  min-width: 100vh;
  min-height: 100vh;
  display: flex;
`;

const HomeLeft = styled.div`
  min-width: 70%;
  min-height: 100%;
`;

const HomeLeftBottom = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 65%;
  padding: 5% 5% 5px 5%;
  margin-top: 25%;
`;

const HomeLeftGym = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 12%;
`;

const HomeLeftRead = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeLeftButton = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  border-radius: 35px;
  color: white;
  width: 70%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  background-color: #ff88ef;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
`;

const HomeLeftRecord = styled.div`
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  height: 80%;
`;

const LeftRecord1 = styled.div`
  display: flex;
  width: 26%;
  height: 95%;
  box-shadow: 0px 11px 30px 8px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
`;

const Record1Left = styled.div`
  border-radius: 12px 0px 0px 12px;
  background-color: #ff88ef;
  width: 15%;
  height: 100%;
`;

const HomeRight = styled.div`
  min-width: 30%;
  min-height: 100%;
  background-color: #ddb2ff;
`;

const HomeRightBottom = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 65%;
`;

const HomeRightTop = styled.div`
  height: 35%;
  width: 100%;
`;

const Hrlink = styled(Link)`
  border-radius: 25px;
  box-shadow: 0px 0px 12px 12px rgba(182, 182, 182, 0.25);
  padding: 10px 255px;
  text-decoration: none;
  color: white;
  background-color: #b98eff;
`;

const RightShoplist = styled.div`
  display: flex;
  justify-content: center;
  height: 88%;
  padding: 10%;
`;

const RightShoplistIn = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.25);
  height: 100%;
  width: 77%;
  background-color: #ffff;
`;

const ShoplistinMenu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ShoplistinMenuItem = styled.div`
  background-color: #d9d9d9;
  margin: 3%;
  width: 25%;
  height: 25%;
`;

const RightShop = styled.div`
  background-color: #b98eff;
  height: 12%;
  color: white;
  display: flex;
  align-items: center;
`;

const RightShopText = styled.p`
  padding-left: 20px;
  margin: 0;
`;

const HomeCenter = styled.div`
  box-shadow: 0px 7px 27px 1px rgba(0, 0, 0, 0.25);
  position: absolute;
  border-radius: 15px;
  background-color: #ffff;
  top: 18%;
  left: 5%;
  right: 5%;
  box-sizing: border-box;
  width: 90%;
  height: 120px;
  display: flex;
`;

const HomeProfile = styled.div`
  min-width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeProfile1 = styled.div`
  background-color: #d9d9d9;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

const HomeName = styled.div`
  font-family: "Inter";
  min-width: 24%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HomePoint = styled.div`
  min-width: 17%;
  border-left: 1px solid #000000;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Home() {
  const records = ["권해수", "권해수", "권해수"];
  const menuItems = Array(9).fill(null);
  const tiemms = [
    { three: "포인트", four: "1024p" },
    { three: "주문/배송", four: "조회하기" },
    { three: "내 정보", four: "보기" },
  ];

  return (
    <HomeContainer>
      <HomeLeft>
        <HomeLeftBottom>
          <HomeLeftGym>
            <HomeLeftRead>나의 운동 기록</HomeLeftRead>
            <HomeLeftButton>운동 기록 하러 가기</HomeLeftButton>
          </HomeLeftGym>
          <HomeLeftRecord>
            {records.map((name, index) => (
              <LeftRecord1 key={index}>
                <Record1Left />
                <div>{name}</div>
              </LeftRecord1>
            ))}
          </HomeLeftRecord>
        </HomeLeftBottom>
      </HomeLeft>

      <HomeRight>
        <HomeRightTop>
          <Hrlink to="/">뒤로 가기</Hrlink>
        </HomeRightTop>
        <HomeRightBottom>
          <RightShoplist>
            <RightShoplistIn>
              <p>최근 구매 목록</p>
              <ShoplistinMenu>
                {menuItems.map((_, index) => (
                  <ShoplistinMenuItem key={index}></ShoplistinMenuItem>
                ))}
              </ShoplistinMenu>
            </RightShoplistIn>
          </RightShoplist>
          <RightShop>
            <RightShopText>상품 더 담으러 가기</RightShopText>
          </RightShop>
        </HomeRightBottom>
      </HomeRight>

      <HomeCenter>
        <HomeProfile>
          <HomeProfile1 />
        </HomeProfile>
        <HomeName>
          <h2>000 님</h2>
          <p>반갑습니다</p>
        </HomeName>
        {tiemms.map((item, index) => (
          <HomePoint key={index}>
            <h3>{item.three}</h3>
            <h4>{item.four}</h4>
          </HomePoint>
        ))}
      </HomeCenter>
    </HomeContainer>
  );
}

export default Home;
