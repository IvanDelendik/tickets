import React from "react";
import "./StandartPoster.scss";
// import { connect } from "react-redux";
// import { addBacket } from "../../../redux/actions/addAction";

const StandartPoster = ({ heading, data }) => {
  return (
    <div className="products">
      <h1 className="products-title">{heading}</h1>
      <div className="products-wrapper">
        {data.map((product, index) => {
          return (
            <div className="products-card" key={index}>
              <div className="products-box">
                <img
                  className="products-card-img"
                  src={product.img_poster}
                  alt={product.alt}
                />
                <p className="products-box-ageandgenre">{product.age}</p>
                <h2 className="products-box-name">{product.name}</h2>
                <p className="products-box-ageandgenre">{product.genre}</p>
              </div>
              <button className="button">Купить билет</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StandartPoster;
