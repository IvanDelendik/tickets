import React from "react";
import "./Basket.scss";
import Header from "../../../components/Header/Header";

const Basket = () => {
  return (
    <div className="basket">
      <Header />
      <div className="basket-blok">
        <p>Корзина пуста </p>
      </div>
    </div>
  );
};

export default Basket;
