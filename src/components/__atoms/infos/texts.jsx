import React from "react";
import "./texts.css";
import Vector from "../../../assets/Images/Vector.svg";

function Texts({
  name,
  description,
  calories,
  num1,
  num2,
  num3,
  temperature,
  discount,
  original,
  img,
}) {
  return (
    <>
      <div className="image-container">
        <div className="svg-container">
          <img src={Vector} alt="" />
        </div>
        <img src={img} alt="" />
      </div>
      <div className="texts-wrap">
        <div>
          <h1 className="heading">{name}</h1>
          {/* <img src="" alt="" />
        <img src="" alt="" /> */}
        </div>
        <p className="description">{description}</p>

        <div className="pros-container">
          <p className="pros">{calories}</p>
          <p className="pros">
            P/F/C: {num1}/{num2}/{num3}
          </p>
          <p className="pros">{temperature} °C</p>
        </div>

        <div className="price-order">
          <div className="prices">
            <h1 className="discount">${discount}0</h1>
            <h1 className="original">${original}0</h1>
          </div>
          <button className="order">ORDER</button>
        </div>
      </div>
    </>
  );
}

export default Texts;
