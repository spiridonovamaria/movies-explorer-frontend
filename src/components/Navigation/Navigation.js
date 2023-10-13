import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import account from '../../images/account.svg';

function Navigation({ handleCloseBurger }) {
    const setActiveLinkMobile = ({ isActive }) =>
        isActive ? 'navigation__link_active' : 'navigation__link';

    return (
        <div className="navigation__page-overlay">
            <div className="navigation__overlay-block"></div>
            <div className="navigation__menu">
                <button className="navigation__close-btn" onClick={handleCloseBurger}></button>
                <nav className="navigation__links">
                    <NavLink to="/" className={setActiveLinkMobile}>
                        Главная
                    </NavLink>
                    <NavLink to="/movies" className={setActiveLinkMobile}>
                        Фильмы
                    </NavLink>
                    <NavLink to="/saved-movies" className={setActiveLinkMobile}>
                        Сохранённые фильмы
                    </NavLink>
                </nav>
                <Link to="/profile" className="navigation__account-btn">
                    <img
                        className="navigation__account-image"
                        src={account}
                        alt="Кнопка входа в аккаунт"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Navigation;
