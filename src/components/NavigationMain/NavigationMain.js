import React from 'react';
import './NavigationMain.css';
import { Link } from 'react-router-dom';

function NavigationMain() {
    return (
        <>
            <div className="nav-main">
                <Link className="nav-main__register" to="/signup">Регистрация</Link>
                <Link className="nav-main__login" to="/signin">Войти</Link>
            </div>
        </>
    );
}

export default NavigationMain;