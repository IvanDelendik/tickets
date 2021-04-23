import React from "react";
import "./Profile.scss";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";

function Profile() {
  return (
    <div className="profile">
      <Header />
      <form className="profile-login">
        <h1>Авторизация</h1>
        <input type="text" placeholder="Логин" />
        <input type="password" placeholder="Пароль" />
        <Link to="/" className="profile-login-link">
          Войти
        </Link>
      </form>
    </div>
  );
}

export default Profile;
