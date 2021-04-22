import React from "react";
import "../NowPoster/Poster.scss";
import { connect } from "react-redux";
import { select } from "../../../redux/actions/index";

const SoonPoster = (props) => {
  return (
    <div className="catalog">
      <div className="products">
        <h1 className="products-title">{props.title}</h1>
        <div className="products-wrapper">
          {props.soon.map((product) => {
            return (
              <div className="products-card" key={product.id}>
                <div className="products-box">
                  <img
                    // onClick={() => props.select(product)}
                    className="products-card-img"
                    src={product.img_poster}
                    alt={product.alt}
                  />
                  <p className="products-box-ageandgenre">{product.age}</p>
                  <h2 className="products-box-name">{product.name}</h2>
                  <p className="products-box-ageandgenre">{product.genre}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <DetailsPoster /> */}
    </div>
  );
};

function mapStateToProps(state) {
  return { soon: state.soon };
}

const mapDispatchToProps = { select };

export default connect(mapStateToProps, mapDispatchToProps)(SoonPoster);
