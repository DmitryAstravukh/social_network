import React, { Component } from 'react';
import './login-page.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faKey, faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import logo from './../../assets/image/white-logo.svg';

export default class LoginPage extends Component{
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
          
          <div className='login-page__content'>
            <h1>Добро пожаловать</h1>
            <p>Войдите, чтобы общаться и делиться новостями</p>
            <form action='' className='login-form'>
              <div className='input-group'>
                <div className='input-group__email'>
                  <input type='email' placeholder='Email или логин'/>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <hr/>
                <div className='input-group__pass'>
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
              
              <button className='login-btn'>Войти</button>
            </form>
            
          </div>
        </div>
          
      </div>
    );
  }
}
