import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  const records = ["권해수", "권해수", "권해수"];
  const menuItems = Array(9).fill(null);
  const tiemms = [
    { three: "포인트", four: "1024p" },
    { three: "주문/배송", four: "조회하기" },
    { three: "내 정보", four: "보기" },
  ];
  return (
    <div className="Home">
      <div className="Home_left">
        <div className="Home_left_bottom">
          <div className="Home_left_gym">
            <h3 className="Home_left_read">나의 운동 기록</h3>
            <div className="Home_left_button">운동 기록 하러 가기</div>
          </div>
          <div className="Home_left_record">
            {records.map((name, index) => (
              <div key={index} className="left_record1">
                <div className="record1_left"></div>
                <div>{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="Home_right">
        <div className="Home_right_top">
          <Link to="/" className="Hrlink">
            뒤로 가기
          </Link>
        </div>
        <div className="Home_right_bottom">
          <div className="right_shoplist">
            <div className="right_shoplistin">
              <p>최근 구매 목록</p>
              <div className="shoplistin_menu">
                {menuItems.map((_, index) => (
                  <div key={index} className="shoplistin_menuitem"></div>
                ))}
              </div>
            </div>
          </div>
          <div className="right_shop">
            <p>상품 더 담으러 가기</p>
          </div>
        </div>
      </div>

      <div className="Home_center">
        <div className="Home_Profile">
          <div className="Home_Profile1"></div>
        </div>
        <div className="Home_name">
          <h2>권해수 님</h2>
          <p>반갑습니다</p>
        </div>
        {tiemms.map((item, index) => (
          <div key={index} className="Home_point">
            <h3>{item.three}</h3>
            <h4>{item.four}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
