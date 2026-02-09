import React from "react";
import "./food_info.css";
import Texts from "../../__atoms/infos/texts";
import Pizza from "../../../assets/Images/Pizza.png";
import Strawberry from "../../../assets/Images/Strawberry.png";
import Tortellini from "../../../assets/Images/Tortellini.jpg";

function Food() {
  return (
    <>
      <div className="meal-container">
        <Texts
          img={Pizza}
          name="Pepperoni Pizza"
          description="Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust. This is premium pizza"
          calories="265 Cal"
          num1={12}
          num2={10}
          num3={31}
          temperature={53.8}
          discount={23.9}
          original={29.9}
        />
      </div>
      <div className="meal-container">
        <Texts
          img={Tortellini}
          name="Tortellini"
          description="Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce."
          calories="270 Cal"
          num1={18}
          num2={4}
          num3={41}
          temperature={42.4}
          discount={17.9}
          original={22.9}
        />
      </div>
      <div className="meal-container">
        <Texts
          img={Strawberry}
          name="Strawberry Cake"
          description="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
          calories="346 Cal"
          num1={6}
          num2={14}
          num3={49}
          temperature={13.9}
          discount={13.9}
          original={18.9}
        />
      </div>
    </>
  );
}

export default Food;
