import React from 'react';
import './SearchForm.css';

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form">
                <input
                    className="search__input"
                    type="text"
                    placeholder="Фильм"
                    required/>
                <button className="search__button" type="submit" />
            </form>
            <div className="search__container">
                <label class="search__checkbox" htmlFor="checkbox">
                    <input class="search__input-checkbox" type="checkbox" id="checkbox" />
                    <span class="search__inner">Короткометражки</span>
                </label>
            </div>
        </section>
    )
}

export default SearchForm;