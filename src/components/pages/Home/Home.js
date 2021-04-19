import React from "react";
import "./Home.scss";
import BigPoster from "../../Posters/BigPoster/BigPoster";
import StandartPoster from "../../Posters/StandartPoster/StandartPoster";
import { nowcinemaData, sooncinemaData } from "../../../data";
import Stock from "../../Stock/Stock";
import Footer from "../../Footer/Footer";

function Home() {
  return (
    <div className="Home">
      <BigPoster />
      <StandartPoster heading="Сейчас в кино" data={nowcinemaData} />
      <Stock />
      <StandartPoster heading="Скоро" data={sooncinemaData} />
      <Footer />
    </div>
  );
}

export default Home;
