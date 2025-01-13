import "./Aids.css";
import React, { useEffect, useState } from "react";
import data from "../../json-server/db.json";
const Aids = ({ point, name }) => {
  const [aiddata, setaidData] = useState([]);
  const totalPages = 4;
  // useEffect(() => {
  //   fetch(`http://localhost:4000/${point}`)
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, [point]);
  useEffect(() => {
    if (data[point]) {
      setaidData(data[point]);
    }
  }, [point]);
  return (
    <div className="Aids">
      <div className="rap_head">
        <div className="rap_hr"></div>
        <div className="rap_header">
          <h1>-{name}-</h1>
        </div>

        <div className="rap_select">
          <select>
            <option>추천순</option>
            <option>가나다순</option>
            <option>최신순</option>
          </select>
        </div>
      </div>

      <div className="aidmain">
        {aiddata.map((item) => (
          <div className="rap_main" key={item.id}>
            <img className="rap_main_img" src={item.img} alt="img" />
            <div className="rap_main_plus">
              <div className="rap_main_name">{item.name}</div>
              <div className="rap_main_price">
                {item.local} {item.price}원
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
      </div>
      <div className="pagination-box">
        {Array.from({ length: totalPages }, (_, index) => (
          <a key={index} className="paging_btn">
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Aids;
