import React, { Component } from 'react';
import './login-page.scss';

export default class LoginPage extends Component{
  render(){
    return (
      <div className="wrapper">
        <button className='login-page_login-btn'>Войти</button>
      </div>
    );
  }
}
