import React, { useState, useEffect } from 'react';
import { filterShortMovies } from '../../utils/filterShortMovies';
import { filterDurationMovie } from '../../utils/filterDuration';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import * as movies from '../../utils/MoviesApi';

function Movies({ loggedIn, handleLikeFilm, onremoveCard, savedMovies }) {
    const [initialCardsMovies, setInitialCardsMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isShortMovies, setIsShortMovies] = useState(false);
    const [hasRequestError, setHasRequestError] = useState(false);
    const [isNotFoundPage, setIsNotFoundPage] = useState(false);

    function getSearchFilteredMovie(query) {
        localStorage.setItem('movieSearch', query);
        localStorage.setItem('shortMovies', isShortMovies);

        if (localStorage.getItem('allMovies')) {
            const movies = JSON.parse(localStorage.getItem('allMovies'));
            getFilteredMovie(movies, query, isShortMovies);
        } else {
            setIsLoading(true);
            movies
                .getMovies()
                .then(cardsData => {
                    getFilteredMovie(cardsData, query, isShortMovies);
                    setHasRequestError(false);
                })
                .catch(err => {
                    setHasRequestError(true);
                    console.log(err);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }

    function getFilteredMovie(movies, query, short) {
        const moviesCardList = filterShortMovies(movies, query, short);
        setInitialCardsMovies(moviesCardList);
        setFilteredMovies(short ? filterDurationMovie(moviesCardList) : moviesCardList);
        localStorage.setItem('movies', JSON.stringify(moviesCardList));
        localStorage.setItem('allMovies', JSON.stringify(movies));
    }

    function getShortFilteredMovie() {
        setIsShortMovies(!isShortMovies);
        if (!isShortMovies) {
            if (filterDurationMovie(initialCardsMovies).length === 0) {
                setFilteredMovies(filterDurationMovie(initialCardsMovies));
            } else {
                setFilteredMovies(filterDurationMovie(initialCardsMovies));
            }
        } else {
            setFilteredMovies(initialCardsMovies);
        }
        localStorage.setItem('shortMovies', !isShortMovies);
    }

    useEffect(() => {
        if (localStorage.getItem('movies')) {
            const movies = JSON.parse(localStorage.getItem('movies'));
            setInitialCardsMovies(movies);
            if (localStorage.getItem('shortMovies') === 'true') {
                setFilteredMovies(filterDurationMovie(movies));
            } else {
                setFilteredMovies(movies);
            }
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem('movieSearch')) {
            setIsNotFoundPage(filteredMovies.length === 0);
        } else {
            setIsNotFoundPage(false);
        }
    }, [filteredMovies]);

    useEffect(() => {
        setIsShortMovies(localStorage.getItem('shortMovies') === 'true');
    }, []);

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main>
                <SearchForm
                    onFilter={getShortFilteredMovie}
                    isShortMovies={isShortMovies}
                    getSearchFilteredMovie={getSearchFilteredMovie}
                />
                <MoviesCardList
                    isLoading={isLoading}
                    cards={filteredMovies}
                    savedMovies={savedMovies}
                    isSavedFilms={false}
                    handleLikeFilm={handleLikeFilm}
                    onremoveCard={onremoveCard}
                    hasRequestError={hasRequestError}
                    isNotFoundPage={isNotFoundPage}
                />
            </main>
            <Footer />
        </>
    );
}

export default Movies;
