import React, { useEffect, useState } from "react";
import "./Rmain.css";

function Rmain({ apipoint }) {
  const [gym, setGym] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/${apipoint}`)
      .then((response) => response.json())
      .then((data) => setGym(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [apipoint]);

  return (
    <>
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
              onClick={() => window.open("https://jamaicaseoul.modoo.at/")}
            >
              링크 바로가기
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Rmain;
