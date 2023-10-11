import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  const [isEdit, setIsEdit] = React.useState(false);

  function handleEdit() {
    setIsEdit(true);
  }

  function handleSave(e) {
    e.preventDefault();
    setIsEdit(false);
  }

  const [isValid, setIsValid] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [formValue, setFormValue] = React.useState({
    name: '',
    email: ''
  });

  function handleChange(e) {
    const input = e.target;
    const { value, name } = input;
    setFormValue({ ...formValue, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest('form').checkValidity());
  }

  return (
    <>
      <Header loggedIn={true} />
      <main className='profile'>
        <section className='profile__container'>
          <h1 className='profile__header'>Привет, Мария!</h1>

          <form className='profile__form' name='profile' noValidate>
            <label className='profile__label'>
              Имя
              <input
                className={`profile__input ${errors.name ? 'profile__input_error' : ''}`}
                type='text'
                name='name'
                required
                minLength={5}
                maxLength={50}
                onChange={handleChange}
                value={formValue.name || 'Мария'}
              />
            </label>
            <span
              className={`profile__input-error ${!isValid ? 'profile__input-error_active' : ''}`}
            >
              {errors.name}
            </span>

            <label className='profile__label'>
              E-mail
              <input
                className={`profile__input ${errors.email ? 'profile__input_error' : ''}`}
                type='email'
                name='email'
                required
                minLength={5}
                maxLength={50}
                onChange={handleChange}
                value={formValue.email || 'pochta@yandex.ru'}
              />
            </label>

            <span
              className={`profile__input-error ${!isValid ? 'profile__input-error_active' : ''}`}
            >
              {errors.email}
            </span>
          </form>

          <div className={`profile__links ${isEdit ? 'profile__links_hide' : ''}`}>
            <button className='profile__edit' type='button' onClick={handleEdit}>
              Редактировать
            </button>
            <Link to='/' className='profile__exit'>
              Выйти из&nbsp;аккаунта
            </Link>
          </div>

          <div className={`profile__links ${!isEdit ? 'profile__links_hide' : ''}`}>
            <span className={`profile__error ${!isValid ? 'profile__error_active' : ''}`}>
              При обновлении профиля произошла ошибка.
            </span>
            <button
              className={`profile__save ${!isValid ? 'profile__save_disabled' : ''}`}
              type='submit'
              onClick={handleSave}
            >
              Сохранить
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
