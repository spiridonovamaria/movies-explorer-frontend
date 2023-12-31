import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__header'>Портфолио</h2>
      <ul className='portfolio__menu'>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://github.com/spiridonovamaria/how-to-learn'>
            Статичный сайт
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://github.com/spiridonovamaria/russian-travel'>
            Адаптивный сайт
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            href='https://github.com/spiridonovamaria/react-mesto-api-full-gha'
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
