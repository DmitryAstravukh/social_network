import React, { Component } from 'react';
import './navbar.scss';

import avatar from './../../assets/image/avatar.jpg';
import logo from './../../assets/image/logo.png';


export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='dark-block'>
          <div className='navbar__logo'>
            <img src={logo} alt='logo'/>
          </div>
          <div className='navbar__user-card'>
            <div className='user-card__avatar'>
              <img src={avatar} alt='avatar'/>
            </div>
            <h3>Дмитрий</h3>
            <div className='user-card__info'>
              <div className='friends'>
                <span>7</span>
                <span>Друзей</span>
              </div>
              <div className='groups'>
                <span>3</span>
                <span>Группы</span>
              </div>
            </div>
          </div>
        </div>
          
        <div className='light-block'>
          <div className='navbar__menu'>
            <nav>
              <ul>
                <li>Профиль</li>
                <li>Сообщения</li>
                <li>Новости</li>
                <li>Музыка</li>
                <li>Видео</li>
              </ul>
            </nav>
          </div>
        </div>
          
      </div>
    )
  }
}