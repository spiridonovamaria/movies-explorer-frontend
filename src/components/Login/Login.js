import React from 'react';
import LoginAndRegisterForm from '../LoginAndRegisterForm/LoginAndRegisterForm';
import { EMAIL_PATTERN } from '../../utils/constants';
import useForm from '../../hooks/useForm';
import '../LoginAndRegisterForm/LoginAndRegisterForm.css';

function Login({ onAuthorization, isLoading }) {
    const { enteredValues, errors, handleChangeInput, isFormValid } = useForm();

    function editProfileUserInfo(e) {
        e.preventDefault();
        onAuthorization({
            email: enteredValues.email,
            password: enteredValues.password
        });
    }

    return (
        <LoginAndRegisterForm
            greeting="Рады видеть!"
            formName="login"
            buttonText="Войти"
            question="Еще не зарегистрированы?"
            link="/signup"
            linkText="Регистрация"
            onSubmit={editProfileUserInfo}
            isLoading={isLoading}
            isDisablButton={!isFormValid}
        >
            <label className="form__label">
                E-mail
                <input
                    className={`form__input ${errors.email ? 'form__input_error' : ''}`}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Введите ваш e-mail"
                    minLength={5}
                    maxLength={50}
                    required
                    onChange={handleChangeInput}
                    value={enteredValues.email || ''}
                    pattern={EMAIL_PATTERN}
                />
                <span className={`form__error ${!isFormValid ? 'form__error_active' : ''}`}>
                    {errors.email}
                </span>
            </label>

            <label className="form__label">
                Пароль
                <input
                    className={`form__input ${errors.password ? 'form__input_error' : ''}`}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Введите пароль"
                    minLength={5}
                    maxLength={50}
                    required
                    onChange={handleChangeInput}
                    value={enteredValues.password || ''}
                />
                <span className={`form__error ${!isFormValid ? 'form__error_active' : ''}`}>
                    {errors.password}
                </span>
            </label>
        </LoginAndRegisterForm>
    );
}

export default Login;
