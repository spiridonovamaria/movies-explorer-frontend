import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ duration, image, nameRU }) {
  const location = useLocation();
  return (
    <div className='card'>
      <img className='card__image' src={image} alt='Постер кинофильма' />
      <div className='card__container'>
        <div className='card__info'>
          <h2 className='card__header'>{nameRU}</h2>
          <p className='card__duration'>{duration}</p>
        </div>
        {location.pathname === '/saved-movies' && (
          <button className='card__button-delete' type='button' aria-label='Удалить кинофильм' />
        )}
        {location.pathname === '/movies' && (
          <button
            className='card__button-save card__button'
            type='button'
            aria-label='Сохранить кинофильм'
          />
        )}
      </div>
    </div>
  );
}

export default MoviesCard;
