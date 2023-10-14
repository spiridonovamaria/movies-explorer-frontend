import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ getSearchFilteredMovie, onFilter, isShortMovies }) {
    const [isQueryError, setIsQueryError] = useState(false);
    const [query, setQuery] = useState('');

    const location = useLocation();

    function editProfileUserInfo(e) {
        e.preventDefault();
        if (query.trim().length === 0) {
            setIsQueryError(true);
        } else {
            setIsQueryError(false);
            getSearchFilteredMovie(query);
        }
    }

    function getEditQueryData(event) {
        setQuery(event.target.value);
    }

    useEffect(() => {
        if (location.pathname === '/movies' && localStorage.getItem('movieSearch')) {
            const localQuery = localStorage.getItem('movieSearch');
            setQuery(localQuery);
        }
    }, [location]);

    return (
        <section className="search" aria-label="Поисковик">
            <form className="search__form" name="search" noValidate onSubmit={editProfileUserInfo}>
                <input
                    className="search__input"
                    type="text"
                    placeholder="Фильм"
                    required
                    minLength={5}
                    maxLength={50}
                    value={query || ''}
                    onChange={getEditQueryData}
                />
                <button className="search__button" type="submit" />
            </form>
            <FilterCheckbox onFilter={onFilter} isShortMovies={isShortMovies} />
            {isQueryError && (
                <span className="search__form-error">Нужно ввести ключевое слово</span>
            )}
            {/* <div className="search__border-bottom"></div> */}
        </section>
    );
}

export default SearchForm;
