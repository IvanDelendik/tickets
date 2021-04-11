import React from "react";
import "./Sports.scss";
import { Link } from "react-router-dom";

function Sports() {
  return (
    <div className="Login">
      <p>Страница спортивных событий</p>
      <Link to="/home">
        <input type="button" value="На главную" />
      </Link>
      <Link to="/">
        <input type="button" value="Выход" />
      </Link>
    </div>
  );
}

export default Sports;
