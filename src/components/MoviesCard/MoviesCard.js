import React from 'react';
import { durationConverterMovie } from '../../utils/durationConverter';
import './MoviesCard.css';

function MoviesCard({ card, saved, isSavedFilms, savedMovies, handleLikeFilm, onremoveCard }) {
    function onCardClick() {
        if (saved) {
            onremoveCard(savedMovies.filter(m => m.movieId === card.id)[0]);
        } else {
            handleLikeFilm(card);
        }
    }

    function onDelete() {
        onremoveCard(card);
    }

    const cardLikeButtonClassName = `${
        saved ? 'card__button-save card__button-save_active' : 'card__button-save'
    }`;

    return (
        <div className="card">
            <a href={card.trailerLink} target="_blank" rel="noreferrer">
                <img
                    className="card__image"
                    src={
                        isSavedFilms ? card.image : `https://api.nomoreparties.co/${card.image.url}`
                    }
                    alt={card.nameRU}
                />
            </a>
            <div className="card__container">
                <div className="card__info">
                    <h2 className="card__header">{card.nameRU}</h2>
                    <p className="card__duration">{durationConverterMovie(card.duration)}</p>
                </div>

                {isSavedFilms ? (
                    <button
                        className="card__button-delete"
                        type="button"
                        aria-label="Удалить кинофильм"
                        onClick={onDelete}
                    />
                ) : (
                    <button
                        className={cardLikeButtonClassName}
                        type="button"
                        aria-label="Сохранить кинофильм"
                        onClick={onCardClick}
                    />
                )}
            </div>
        </div>
    );
}

export default MoviesCard;
