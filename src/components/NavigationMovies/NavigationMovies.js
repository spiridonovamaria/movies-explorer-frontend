import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationMovies.css';

function NavigationMovies(loggedIn) {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };
  if (loggedIn) {
    return (
      <>
        <section className='nav-movies' aria-label='Поиск фильмов'>
          <nav className='nav-movies__info'>
            <div className='nav-movies__container'>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? 'nav-movies__link nav-movies__link-active' : 'nav-movies__link'}`
                }
                to='/movies'
              >
                Фильмы
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? 'nav-movies__link nav-movies__link-active' : 'nav-movies__link'}`
                }
                to='/saved-movies'
              >
                Сохранённые фильмы
              </NavLink>
            </div>
            <NavLink className='nav-movies__account' to='/profile'>
              <p className='nav-movies__header'>Аккаунт</p>
              <div className='nav-movies__logo'></div>
            </NavLink>
          </nav>
          <div className='mobile-menu'>
            <button
              className='mobile-menu__button-open'
              type='button'
              onClick={toggleMobileMenu}
            ></button>
            <div className={`mobile-menu__open ${isMobileMenu && 'mobile-menu__open-active'}`}>
              <button
                className='mobile-menu__button-exit'
                type='button'
                onClick={toggleMobileMenu}
              ></button>
              <nav className='mobile-menu__info'>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive ? 'mobile-menu__link mobile-menu__link-active' : 'mobile-menu__link'
                    }`
                  }
                  to='/'
                  onClick={toggleMobileMenu}
                >
                  Главная
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive ? 'mobile-menu__link mobile-menu__link-active' : 'mobile-menu__link'
                    }`
                  }
                  to='/movies'
                  onClick={toggleMobileMenu}
                >
                  Фильмы
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive ? 'mobile-menu__link mobile-menu__link-active' : 'mobile-menu__link'
                    }`
                  }
                  to='/saved-movies'
                  onClick={toggleMobileMenu}
                >
                  Сохранённые фильмы
                </NavLink>
              </nav>
              <NavLink
                className='mobile-menu__link-account'
                to='/profile'
                onClick={toggleMobileMenu}
              >
                <p className='mobile-menu__header'>Аккаунт</p>
                <div className='mobile-menu__logo'></div>
              </NavLink>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default NavigationMovies;
