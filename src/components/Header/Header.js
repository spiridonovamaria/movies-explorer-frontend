import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import account from '../../images/account.svg';
import menu from '../../images/menu.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ loggedIn }) {
    const [isClicked, setIsClicked] = React.useState(false);

    const setActiveLinkHeader = ({ isActive }) =>
        isActive ? 'header__button_active' : 'header__button';

    function handleOpenBurger() {
        setIsClicked(true);
    }

    function handleCloseBurger() {
        setIsClicked(false);
    }

    return (
        <>
            {!loggedIn ? (
                <header className="header">
                    <Link to="/" className="logo">
                        <img src={logo} alt="Логотип" />
                    </Link>
                    <nav className="header__button-block">
                        <Link to="/signup" className="header__button">
                            Регистрация
                        </Link>
                        <Link to="/signin" className="header__button header__button-green">
                            Войти
                        </Link>
                    </nav>
                </header>
            ) : (
                <header className="header header_place">
                    <Link to="/" className="logo">
                        <img src={logo} alt="Логотип" />
                    </Link>
                    <nav className="header__button-block-films">
                        <NavLink to="/movies" className={setActiveLinkHeader}>
                            Фильмы
                        </NavLink>
                        <NavLink to="/saved-movies" className={setActiveLinkHeader}>
                            Сохранённые фильмы
                        </NavLink>
                    </nav>
                    <div className="header__button-block">
                        <Link to="/profile" className="header__account-button">
                            <img
                                className="header__account-image"
                                src={account}
                                alt="Выйти из аккаунта"
                            />
                        </Link>
                        <button className="header__menu-button" onClick={handleOpenBurger}>
                            <img src={menu} alt="Меню" />
                        </button>
                    </div>
                    {isClicked ? <Navigation handleCloseBurger={handleCloseBurger} /> : ''}
                </header>
            )}
        </>
    );
}

export default Header;
