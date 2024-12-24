import { React, useEffect, useState } from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Header";

function Details() {
  const { apipoint, id } = useParams();
  const [entires, setEntires] = useState(null);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    axios.get(`http://localhost:4000/${apipoint}/${id}`).then((response) => {
      setEntires(response.data);
    });
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
    <div className="Details">
      <Header />
      <div className="detail_body">
        <div className="detail_body_center">
          <div className="center_right">
            <img className="center_right_img" src={entires.img} alt="img" />
          </div>
          <div className="center_left">
            <div className="center_left_mininame">임욱 상사</div>
            <h2>{entires.name}</h2>
            <div className="center_left_t">택배 배송/ 무료 배송</div>
            <hr></hr>
            <div className="center_left_num">
              <button onClick={decrementQuantity}>-</button>
              <div>{quantity}</div>
              <button onClick={incrementQuantity}>+</button>
            </div>
            <hr></hr>
            <div className="center_left_sum">
              <div>총 상품 금액</div>
              <div className="center_left_last">
                <div className="last_left">총 수량 1개</div>
                <h4>{entires.price}원</h4>
              </div>
            </div>
            <div className="center_left_button">
              <button className="button_left">바로 구매</button>
              <button className="button_right">장바구니</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
