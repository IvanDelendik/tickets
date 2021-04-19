import React from "react";
import "./Stock.scss";
import visa from "../../images/visa.jpg";

const Stock = () => {
  return (
    <div className="stock">
      <img className="stock-img" src={visa} alt="visa" />
      <div className="stock-blok">
        <p>Акция</p>
        <h2>Мир привилегий VISA</h2>
        <p>
          При оплате билетов в кинотеатрах платежными карточками Visa вы
          получаете скидку!
        </p>
      </div>
    </div>
  );
};

export default Stock;
