import { React, useEffect, useState } from "react";
import "./Rmain.css";
import { useParams } from "react-router-dom";
function Rmain() {
  const [gym, setGym] = useState([]);
  const { apipoint } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/${apipoint}`)
      .then((response) => response.json())
      .then((data) => setGym(data));
  }, [apipoint]);

  return (
    <div className="Rap_main">
      {gym.map((gym) => (
        <div className="rap_main" key={gym.id}>
          <img className="rap_main_img" src={gym.img} alt="img" />
          <div className="rap_main_plus">
            <div className="rap_main_name">{gym.name}</div>
            <div className="rap_main_price">
              {gym.local} {gym.price}원
            </div>
          </div>
          <div className="rap_main_button">
            <button
              className="r_main_button"
              style={{ textDecoration: "none", color: "white" }}
              onClick={() => window.open(gym.link)} // 동적 링크로 수정
            >
              링크 바로가기
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rmain;
