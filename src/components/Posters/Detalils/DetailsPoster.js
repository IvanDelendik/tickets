import React from "react";
import { connect } from "react-redux";
import "./DetailsPoster.scss";
import { select } from "../../../redux/actions/index";

const DetailsPoster = (props) => {
  return (
    <div className="detailsPoster">
      {console.log(props.now)}
      {!props.now ? null : (
        <div
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 1) 30% , rgba(0, 0, 0, 0.1)), url(" +
              props.now.img_afisha +
              ") center/cover",
          }}
          className="detailsPoster-bg"
        >
          <div className="detailsPoster-info">
            <button className="button" onClick={() => props.select(null)}>
              Скрыть
            </button>
            <h1>{props.now.name}</h1>
            <h3>О фильме</h3>
            <div>
              <span>Год производства</span>
              <p>{props.now.productionYear}</p>
            </div>
            <div>
              <span>Страна</span>
              <p>{props.now.country}</p>
            </div>
            <div>
              <span>Жанр</span>
              <p>{props.now.genre}</p>
            </div>
            <div>
              <span>Режиссер</span>
              <p>{props.now.producer}</p>
            </div>
            <div>
              <span>Бюджет</span>
              <p>{props.now.budget}</p>
            </div>
            <div>
              <span>Премьера</span>
              <p>
                {props.now.release} {props.now.productionYear}
              </p>
            </div>
            <div>
              <span>Возраст</span>
              <p>{props.now.age}</p>
            </div>
            <button className="button">Купить фильм</button>
          </div>
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return { now: state.active };
}

const mapDispatchToProps = { select };

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPoster);
