import React from "react";
import "./Productsmain.css";
import advertisement from "../img/coad.jpg";
import Productsmainbest from "./Productsmainbest";

function Productsmain() {
  return (
    <div className="Productsmain">
      <div className="advertisement">
        <img src={advertisement} alt="advertisement" />

        <Productsmainbest apiEndpoint="products" big="Best" />

        <div className="prototype" />

        <Productsmainbest apiEndpoint="massage" big="New" />
      </div>
    </div>
  );
}

export default Productsmain;
