import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../../Header/Header';
import More from '../More/More';
import Footer from '../../Footer/Footer';

function Movies() {
  return (
    <>
      <Header loggedIn={true} />
      <main>
        <SearchForm />
        <MoviesCardList />
        <More />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
