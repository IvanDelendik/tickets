import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <p>Главная страница</p>
      <Link to="/sports">
        <input type="button" value="Спортивные события" />
      </Link>
      <Link to="/">
        <input type="button" value="Выход" />
      </Link>
      <div></div>
    </div>
  );
}

export default Home;
