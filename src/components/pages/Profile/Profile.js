import React from "react";
import "./Profile.scss";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <form className="login">
      <h1>Авторизация</h1>
      <input type="text" placeholder="Логин" />
      <input type="password" placeholder="Пароль" />
      <Link to="/" className="login-link">
        Войти
      </Link>
    </form>
  );
}

export default Profile;
