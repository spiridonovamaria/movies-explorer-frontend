import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import {
    DESKTOP_COUNTER_MOVIES,
    TABLET_COUNTER_MOVIES,
    MOBILE_COUNTER_MOVIES
} from '../../utils/constants';
import SearchError from '../SearchError/SearchError';
import './MoviesCardList.css';

function MoviesCardList({
    cards,
    isLoading,
    savedMovies,
    isSavedFilms,
    handleLikeFilm,
    onremoveCard,
    hasRequestError,
    isNotFoundPage
}) {
    const { pathname } = useLocation();
    const [shownMovies, setShownMovies] = useState(0);

    function getSavedListMovies(savedMovies, card) {
        return savedMovies.find(savedMovie => savedMovie.movieId === card.id);
    }

    function getDisplayShowCountMovies() {
        const display = window.innerWidth;
        if (display > 1160) {
            setShownMovies(12);
        } else if (display > 768) {
            setShownMovies(8);
        } else {
            setShownMovies(5);
        }
    }

    function getShowCountMoviesClickButton() {
        const display = window.innerWidth;
        if (display > 1160) {
            setShownMovies(shownMovies + DESKTOP_COUNTER_MOVIES);
        } else if (display > 768) {
            setShownMovies(shownMovies + TABLET_COUNTER_MOVIES);
        } else {
            setShownMovies(shownMovies + MOBILE_COUNTER_MOVIES);
        }
    }

    useEffect(() => {
        getDisplayShowCountMovies();
    }, [cards]);

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('resize', getDisplayShowCountMovies);
        }, 500);
        return () => {
            window.removeEventListener('resize', getDisplayShowCountMovies);
        };
    });

    return (
        <section className="cards">
            {isLoading && <Preloader />}
            {isNotFoundPage && !isLoading && <SearchError errorText={'Поиск не дал результатов'} />}
            {hasRequestError && !isLoading && (
                <SearchError
                    errorText={
                        'Во время поискового запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
                    }
                />
            )}

            {!isLoading && !hasRequestError && !isNotFoundPage && (
                <>
                    {pathname === '/saved-movies' ? (
                        <>
                            <div className="cards__container">
                                {cards.map(card => (
                                    <MoviesCard
                                        cards={cards}
                                        card={card}
                                        key={isSavedFilms ? card._id : card.id}
                                        saved={getSavedListMovies(savedMovies, card)}
                                        savedMovies={savedMovies}
                                        isSavedFilms={isSavedFilms}
                                        handleLikeFilm={handleLikeFilm}
                                        onremoveCard={onremoveCard}
                                    />
                                ))}
                            </div>
                            <div className="cards__divider"></div>
                        </>
                    ) : (
                        <>
                            <div className="cards__container">
                                {cards.slice(0, shownMovies).map(card => (
                                    <MoviesCard
                                        cards={cards}
                                        card={card}
                                        key={isSavedFilms ? card._id : card.id}
                                        saved={getSavedListMovies(savedMovies, card)}
                                        savedMovies={savedMovies}
                                        isSavedFilms={isSavedFilms}
                                        handleLikeFilm={handleLikeFilm}
                                        onremoveCard={onremoveCard}
                                    />
                                ))}
                            </div>
                            <div className="cards__more" aria-label="Загрузить еще фильмы">
                                {cards.length > shownMovies ? (
                                    <button
                                        className="cards__more-button"
                                        type="button"
                                        onClick={getShowCountMoviesClickButton}
                                    >
                                        Еще
                                    </button>
                                ) : (
                                    ''
                                )}
                            </div>
                        </>
                    )}
                </>
            )}
        </section>
    );
}

export default MoviesCardList;
