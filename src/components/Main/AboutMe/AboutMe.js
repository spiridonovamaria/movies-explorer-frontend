import React from 'react';
import './AboutMe.css';
import photo1 from '../../../images/photo1.jpg';

function AboutMe() {
  return (
    <section className='aboutme' id='about-me'>
      <h2 className='aboutme__header'>Студент</h2>
      <div className='aboutme__info'>
        <div className='aboutme__container'>
          <h3 className='aboutme__name'>Мария</h3>
          <h4 className='aboutme__work'>Фронтенд-разработчик, 29 лет</h4>
          <p className='aboutme__description'>
            Я родилась в Республике Казахстан, но на данный момент проживаю в России. Последние 5
            лет работала в фотоиндустрии. Хочу попробовать для себя что-то новое. Хочу и пробую.
            Последние 5 лет работала в фотоиндустрии. Хочу попробовать для себя что-то новое. Хочу и
            пробую.
          </p>
          <a href='https://github.com/spiridonovamaria' className='aboutme__link' target='blank'>
            Github
          </a>
        </div>
        <img className='aboutme__image' src={photo1} alt='Фотография' />
      </div>
    </section>
  );
}

export default AboutMe;
