import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
// import { addTickets } from "../../redux/actions/index";
// import { connect } from "react-redux";

const Header = () => {
  // const { count } = props;

  return (
    <header className="header">
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/" className="header-nav-link">
              Каталог
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
            {/* {count > 0 ? <span> {count}</span> : null} */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

// const mapStateToProps = (state) => {
//   console.log(state.tickets.tickets);
//   return { count: state.tickets.tickets };
// };

// const mapDispatchToProps = { addTickets };

// export default connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;
