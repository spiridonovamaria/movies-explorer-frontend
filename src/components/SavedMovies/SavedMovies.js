import React from 'react';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies() {
    return (
        <>
            <Header loggedIn={true} />
            <main className="save">

                <SearchForm />
                <MoviesCardList />

            </main>
            <Footer /></>

    );
}

export default SavedMovies;