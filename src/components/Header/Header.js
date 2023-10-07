import React from "react";
import logo from '../../images/logo.svg';
import './Header.css';
import NavigationMain from '../NavigationMain/NavigationMain';
import NavigationMovies from '../NavigationMovies/NavigationMovies';
import { Link } from "react-router-dom";

function Header({ loggedIn }) {
    return (
        <header className={`${loggedIn
            ? "header header__login"
            : "header"}`}>
            <Link to="/">
                <img className="header__logo" src={logo} alt="Логотип" />
            </Link>
            {loggedIn
                ? <NavigationMovies />
                : <NavigationMain />}
        </header>
    )
};

export default Header;