import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function Movies() {
    return (
        <main>
            <Header loggedIn={true}/>
            <SearchForm/>
            <MoviesCardList/>
            <Footer />
        </main>
    );
}

export default Movies;