import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import './Register.css';

function Register() {
    return (
        <div className="register">
            <Link className="register__link_logo" to='/'>
                <img className="register__logo" src={logo} alt='Логотип' />
            </Link>
            <h2 className="register__header">Добро пожаловать!</h2>
            <form className="register__form">
                <label className="register__label">Имя
                    <input
                        className="register__input"
                        type="text"
                        placeholder="Введите имя"
                        name="name"
                        required
                        minLength={5}
                        maxLength={50}
                    />
                </label>
                <label className="register__label">E-mail
                    <input
                        className="register__input"
                        type="email"
                        placeholder="Введите E-mail"
                        name="email"
                        required
                        minLength={5}
                        maxLength={50}
                    />
                </label>
                <label className="register__label">Пароль
                    <input
                        className="register__input"
                        type="password"
                        placeholder="Введите пароль"
                        name="password"
                        required
                        minLength={5}
                        maxLength={50}
                    />
                </label>
                <span className="register__error">Что-то пошло не так...</span>
                <button className="register__submit-button" type="submit" >Зарегистрироваться</button>
            </form>
            <p className="register__login">Уже зарегистрированы?
                <Link className="register__link" to="/signin"> Войти</Link>
            </p>
        </div>
    )
}

export default Register;