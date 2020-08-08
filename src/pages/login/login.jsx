import React, { Component } from 'react';
import './login.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faKey, faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import logo from './../../assets/image/white-logo.svg';

const SigninContent = () => {
  return(
    <div className='login-page__content-signin'>
      <h1>Добро пожаловать</h1>
      <p>Войдите, чтобы общаться и делиться новостями</p>
      <form action='' className='login-form'>
        <div className='input-group'>
          <div className='input-group__email-signin'>
            <input type='email' placeholder='Email'/>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <hr/>
          <div className='input-group__pass-signin'>
            <input type='password' placeholder='Пароль'/>
            <FontAwesomeIcon icon={faKey} />
          </div> 
        </div>
        
        <div className='additional-functions'>
          <div className='remember-login'>
            <input type='checkbox' 
                    className='remember-login__checkbox'
                    id='remember-login__checkbox' />
            <label htmlFor='remember-login__checkbox'>Запомнить меня</label>
          </div>
          <a href='/' className='lost-password'>Забыли пароль?</a>
        </div> 
        
        <button className='login-btn-signin'>Войти</button>
      </form>
    </div>
  )
}

const SignupContent = () => {
  return(
    <div className='login-page__content-signup'>
      <h1>Добро пожаловать</h1>
      <p>Зарегистрируйтесь, чтобы общаться и делиться новостями</p>
      <form action='' className='login-form'>
        <div className='input-group'>
          <div className='input-group__email-signup'>
            <input type='email' placeholder='Email или логин'/>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <hr/>
          <div className='input-group__pass-signup'>
            <input type='password' placeholder='Пароль'/>
            <FontAwesomeIcon icon={faKey} />
          </div> 
        </div>
        
        <button className='login-btn-signup'>Зарегистрироваться</button>
      </form>
    </div>
  )
}

export default class Login extends Component{
  render(){
    return (
      <div className='login-page'>
        <div className='container'>
          <div className='login-page__header'>
            <div className="login-page__logo">
              <img src={logo} title='Social Network logo' alt='Social Network logo'/>
            </div>
            <div className='login-page__reg'>  
              <a href='/'> 
                <FontAwesomeIcon icon={faUserPlus} />
                Регистрация
              </a>
            </div>
            <div className='login-page__auth hidden'>  
              <a href='/'> 
                <FontAwesomeIcon icon={faSignInAlt} />
                Авторизация
              </a>
            </div>
          </div>
          
          <SigninContent />
          {/* <SignupContent /> */}

        </div>
          
      </div>
    );
  }
}
