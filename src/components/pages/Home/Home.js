import React from "react";
import "./Home.scss";
import BigPoster from "../../Posters/BigPoster/BigPoster";
import NowPoster from "../../Posters/NowPoster/NowPoster";
import SoonPoster from "../../Posters/SoonPoster/SoonPoster";
import Backet from "../Backet/Backet";

import Stock from "../../Stock/Stock";

function Home() {
  return (
    <div className="Home">
      <BigPoster />
      <NowPoster title="На сайте" />
      <Stock />
      <SoonPoster title="Скоро" />
      <Backet />
    </div>
  );
}

export default Home;
