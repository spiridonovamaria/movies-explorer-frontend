import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__container">
                <span className="footer__year">© 2023</span>
                <ul className="footer__info">
                    <li>
                        <a className="footer__link" href="https://practicum.yandex.ru" target="blank">Яндекс.Практикум</a>
                    </li>
                    <li>
                        <a className="footer__link" href="https://github.com/spiridonovamaria" target="blank">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;