import React from 'react';
import './NavigationMain.css';
import { Link } from 'react-router-dom';

function NavigationMain() {
    return (
        <>
            <nav className="nav-main">
                <Link className="nav-main__link nav-main__link-register" to="/signup">Регистрация</Link>
                <Link className="nav-main__link nav-main__link-login" to="/signin">Войти</Link>
            </nav>
        </>
    );
}

export default NavigationMain; 