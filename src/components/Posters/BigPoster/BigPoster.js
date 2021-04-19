import React from "react";
import "./BigPoster.scss";
import Header from "../../Header/Header";

const BigPoster = () => {
  return (
    <div className="bigposter">
      <Header />
      <div className="bigposter-items">
        <p>фантастика, боевик, триллер, 16+</p>
        <h1>Довод</h1>
        <p>с 23 апреля</p>
        <button className="button">Купить билет</button>
      </div>
    </div>
  );
};

export default BigPoster;
