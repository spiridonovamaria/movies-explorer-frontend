import React from 'react';
import LoginAndRegisterForm from '../LoginAndRegisterForm/LoginAndRegisterForm';

function Register() {
  return (
    <LoginAndRegisterForm
      greeting='Добро пожаловать!'
      formName='login'
      addUserName={true}
      buttonText='Регистрация'
      question='Уже зарегистрированы?'
      link='/signin'
      linkText='Вход'
    />
  );
}

export default Register;
