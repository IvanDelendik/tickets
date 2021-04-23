import React from "react";
import "./Catalog.scss";
import { connect } from "react-redux";
import DetailsPoster from "../../Posters/Detalils/DetailsPoster";
import Header from "../../../components/Header/Header";
import { select } from "../../../redux/actions/index";

const Catalog = (props) => {
  return (
    <div className="catalog">
      <Header />
      <div className="products">
        <h1 className="products-title">{props.heading}</h1>
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
                <button className="button">Купить фильм</button>
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
  return { now: state.now, soon: state.soon };
}

const mapDispatchToProps = { select };

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
