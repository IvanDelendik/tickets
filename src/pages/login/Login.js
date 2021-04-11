import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <form className="login">
      <h1>Авторизация</h1>
      <input type="text" placeholder="Логин" />
      <input type="password" placeholder="Пароль" />
      <Link to="/home" className="login-link" value="Войти">
        Войти
      </Link>
    </form>
  );
}

export default Login;
