import React from "react";
import "./Poster.scss";
import { connect } from "react-redux";
import DetailsPoster from "../Detalils/DetailsPoster";
import { select, addBacket } from "../../../redux/actions/index";

const NowPoster = (props) => {
  return (
    <div className="nowPoster">
      <div className="products">
        <h1 className="products-title">{props.title}</h1>
        <div className="products-wrapper">
          {props.now.map((product) => {
            return (
              <div className="products-card" key={product.id}>
                <div className="products-box">
                  <img
                    onClick={() => props.select(product)}
                    className="products-card-img"
                    src={product.img_poster}
                    alt={product.alt}
                  />
                  <p className="products-box-ageandgenre">{product.age}</p>
                  <h2 className="products-box-name">{product.name}</h2>
                  <p className="products-box-ageandgenre">{product.genre}</p>
                </div>
                {console.log(props.films)}
                <button onClick={() => props.addBacket()} className="button">
                  Купить фильм
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <DetailsPoster />
    </div>
  );
};

function mapStateToProps(state) {
  return { now: state.now, films: state.filmsReducer };
}

const mapDispatchToProps = { select, addBacket };

export default connect(mapStateToProps, mapDispatchToProps)(NowPoster);
