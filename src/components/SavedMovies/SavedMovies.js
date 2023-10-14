import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import { filterShortMovies } from '../../utils/filterShortMovies';
import { filterDurationMovie } from '../../utils/filterDuration';
import './SavedMovies.css';

function SavedMovies({ loggedIn, savedMovies, onremoveCard }) {
    const [filteredMovies, setFilteredMovies] = useState(savedMovies);
    const [searchQuery, setSearchQuery] = useState('');
    const [isShortMovies, setIsShortMovies] = useState(false);
    const [isNotFoundPage, setIsNotFoundPage] = useState(false);

    function getShortFilteredMovie() {
        setIsShortMovies(!isShortMovies);
    }

    function getSearchFilteredMovie(query) {
        setSearchQuery(query);
    }

    useEffect(() => {
        const moviesCardList = filterShortMovies(savedMovies, searchQuery);
        setFilteredMovies(isShortMovies ? filterDurationMovie(moviesCardList) : moviesCardList);
    }, [savedMovies, isShortMovies, searchQuery]);

    useEffect(() => {
        if (filteredMovies.length === 0) {
            setIsNotFoundPage(true);
        } else {
            setIsNotFoundPage(false);
        }
    }, [filteredMovies]);

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className="save">
                <SearchForm
                    getSearchFilteredMovie={getSearchFilteredMovie}
                    onFilter={getShortFilteredMovie}
                />
                <MoviesCardList
                    isSavedFilms={true}
                    cards={filteredMovies}
                    savedMovies={savedMovies}
                    onremoveCard={onremoveCard}
                    isNotFoundPage={isNotFoundPage}
                />
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
