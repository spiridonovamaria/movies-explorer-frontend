import React from "react";
import { Link } from "react-router-dom";
import './Error.css';

function Error() {
    return (
        <main className="error">
            <h1 className="error__title">404</h1>
            <p className="error__subtitle">Страница не найдена</p>
            <Link className="error__link" to="/">Назад</Link>
        </main>
    );
}
export default Error;