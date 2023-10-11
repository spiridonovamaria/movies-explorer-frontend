import React from 'react';
import LoginAndRegisterForm from '../LoginAndRegisterForm/LoginAndRegisterForm';

function Login() {
  return (
    <LoginAndRegisterForm
      greeting='Рады видеть!'
      formName='login'
      addUserName={false}
      buttonText='Войти'
      question='Еще не зарегистрированы?'
      link='/signup'
      linkText='Регистрация'
    />
  );
}

export default Login;
