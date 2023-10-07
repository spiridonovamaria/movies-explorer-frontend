import React from 'react';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies() {
    return (
        <main className="save">
            <Header loggedIn={true} />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </main>
    );
}

export default SavedMovies;