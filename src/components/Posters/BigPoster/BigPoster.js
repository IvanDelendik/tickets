import React from "react";
import "./BigPoster.scss";
import Header from "../../Header/Header";
import { connect } from "react-redux";
// import soonCinema from "../../../redux/reducers/soonCinema";

const BigPoster = (props) => {
  const min = Math.ceil(0);
  const max = Math.floor(3);
  const rendomNumber = Math.floor(Math.random() * (max - min)) + min;

  return (
    <div
      style={{
        background:
          "linear-gradient(to right, rgba(0, 0, 0, 1) 30% , rgba(0, 0, 0, 0.1)), url(" +
          props.soon[rendomNumber].img_afisha +
          ") center/cover",
      }}
      className="bigposter"
    >
      <Header />
      <div className="bigposter-items">
        <p>
          {props.soon[rendomNumber].genre}, {props.soon[rendomNumber].age}
        </p>
        <h1>{props.soon[rendomNumber].name}</h1>
        <p>с {props.soon[rendomNumber].release}</p>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { soon: state.soon };
}

export default connect(mapStateToProps)(BigPoster);
