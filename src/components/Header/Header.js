import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/" className="header-nav-link">
              Афиша
            </Link>
          </li>
          <li>
            <Link to="/" className="header-nav-link">
              Инфо
            </Link>
          </li>
          <li>
            <Link to="/" className="header-nav-link">
              Профиль
            </Link>
          </li>
          <li>
            <Link to="/" className="header-nav-link">
              Корзина
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
