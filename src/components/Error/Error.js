import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Error.css';

function Error() {
    const navigate = useNavigate();

    function hundlePath() {
        navigate(-2);
    }

    return (
        <main className="error">
            <div className="error__wrap">
                <h1 className="error__title">404</h1>
                <p className="error__subtitle">Страница не найдена</p>
                <Link className="error__link" to="/" onClick={hundlePath}>
                    Назад
                </Link>
            </div>
        </main>
    );
}
export default Error;
