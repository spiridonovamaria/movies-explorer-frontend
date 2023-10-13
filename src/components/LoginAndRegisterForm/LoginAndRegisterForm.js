import React from 'react';
import { Link } from 'react-router-dom';
import './LoginAndRegisterForm.css';
import logo from '../../images/logo.svg';

function LoginAndRegisterForm({
  greeting,
  formName,
  addUserName,
  buttonText,
  question,
  link,
  linkText
}) {
  const [isValid, setIsValid] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [formValue, setFormValue] = React.useState({
    name: '',
    email: '',
    password: ''
  });

  function handleChange(evt) {
    const input = evt.target;
    const { value, name } = input;
    setFormValue({ ...formValue, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest('form').checkValidity());
  }

  return (
    <main className='form'>
      <section className='form__box'>
        <Link className='form__link-logo' to='/'>
          <img className='form__logo' src={logo} alt='Логотип' />
        </Link>
        <h1 className='form__title'>{greeting}</h1>
        <form className='form__form' name={formName} id='form' noValidate>
          {addUserName && (
            <label className='form__label'>
              Имя
              <input
                className={`form__input ${errors.name ? 'form__input_error' : ''}`}
                type='text'
                name='name'
                id='name'
                placeholder='Введите ваше имя'
                minLength={5}
                maxLength={50}
                required
                onChange={handleChange}
                value={formValue.name || ''}
              />
              <span className={`form__error ${!isValid ? 'form__error_active' : ''}`}>
                {errors.name}
              </span>
            </label>
          )}
          <label className='form__label'>
            E-mail
            <input
              className={`form__input ${errors.email ? 'form__input_error' : ''}`}
              type='email'
              name='email'
              id='email'
              placeholder='Введите ваш e-mail'
              minLength={5}
              maxLength={50}
              required
              onChange={handleChange}
              value={formValue.email || ''}
            />
            <span className={`form__error ${!isValid ? 'form__error_active' : ''}`}>
              {errors.email}
            </span>
          </label>
          <label className='form__label'>
            Пароль
            <input
              className={`form__input ${errors.password ? 'form__input_error' : ''}`}
              type='password'
              name='password'
              id='password'
              placeholder='Введите пароль'
              minLength={5}
              maxLength={50}
              required
              onChange={handleChange}
              value={formValue.password || ''}
            />
            <span className={`form__error ${!isValid ? 'form__error_active' : ''}`}>
              {errors.password}
            </span>
          </label>
          <button
            className={`form__submit ${!isValid ? 'form__submit_disabled' : ''}`}
            type='submit'
          >
            {buttonText || 'Войти'}
          </button>
        </form>

        <p className='form__text'>
          {question}{' '}
          <Link to={link} className='form__link'>
            {linkText}
          </Link>
        </p>
      </section>
    </main>
  );
}

export default LoginAndRegisterForm;
