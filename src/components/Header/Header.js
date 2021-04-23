import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/" className="header-nav-link header-logo">
              MOooVIE
            </Link>
          </li>
          <li>
            <Link to="/catalog" className="header-nav-link">
              Каталог
            </Link>
          </li>
          <li>
            <Link to="/profile" className="header-nav-link">
              Профиль
            </Link>
          </li>
          <li>
            <Link to="/basket" className="header-nav-link header-backet">
              Корзина
              {props.films > 0 ? (
                <span className="header-backet-count">{props.films}</span>
              ) : null}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return { films: state.filmsReducer.films };
};

export default connect(mapStateToProps, null)(Header);
