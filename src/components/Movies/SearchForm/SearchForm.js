import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search' aria-label='Поисковик'>
      <form className='search__form' name='search' noValidate>
        <input
          className='search__input'
          type='text'
          placeholder='Фильм'
          required
          minLength={5}
          maxLength={50}
        />
        <button className='search__button' type='submit' />
      </form>
      <div className='search__container'>
        <label className='search__checkbox' htmlFor='checkbox'>
          <input className='search__input-checkbox' type='checkbox' id='checkbox' />
          <span className='search__inner'>Короткометражки</span>
        </label>
      </div>
    </section>
  );
}

export default SearchForm;
