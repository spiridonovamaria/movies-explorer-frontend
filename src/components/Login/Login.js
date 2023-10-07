import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <Link className="login__link_logo" to='/'>
                <img className="login__logo" src={logo} alt='Логотип' />
            </Link>
            <h2 className="login__header">Рады видеть!</h2>
            <form className="login__form" >
                <label className="login__label">E-mail
                    <input
                        className="login__input"
                        type="email"
                        placeholder="Введите E-mail"
                        name="email"
                        required
                        minLength={5}
                        maxLength={50}
                    />
                </label>
                <label className="login__label">Пароль
                    <input
                        className="login__input"
                        type="password"
                        placeholder="Введите пароль"
                        name="password"
                        required
                        minLength={5}
                        maxLength={50}
                    />
                </label>
                <button className="login__submit-button" type="submit" >Войти</button>
            </form>
            <p className="login__register">Ещё не зарегистрированы?
                <Link className="login__link" to="/signup"> Регистрация</Link>
            </p>
        </div>
    )
}

export default Login;