import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './LoginAndRegisterForm.css';

function LoginAndRegisterForm({
    greeting,
    formName,
    buttonText,
    question,
    link,
    linkText,
    children,
    isLoading,
    isDisablButton,
    isValid,
    onSubmit
}) {
    return (
        <main className="form">
            <section className="form__box">
                <Link className="form__link-logo" to="/">
                    <img className="form__logo" src={logo} alt="Логотип" />
                </Link>
                <h1 className="form__title">{greeting}</h1>

                <form
                    className="form__form"
                    name={formName}
                    id="form"
                    onSubmit={onSubmit}
                    noValidate
                >
                    {children}

                    <button
                        className={
                            isDisablButton || isValid || isLoading
                                ? 'form__submit form__submit_disabled'
                                : 'form__submit'
                        }
                        type="submit"
                        disabled={isDisablButton ? true : false}
                    >
                        {buttonText}
                    </button>
                </form>

                <p className="form__text">
                    {question}{' '}
                    <Link to={link} className="form__link">
                        {linkText}
                    </Link>
                </p>
            </section>
        </main>
    );
}

export default LoginAndRegisterForm;
