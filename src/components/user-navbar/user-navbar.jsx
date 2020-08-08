import React, { Component } from 'react';
import './user-navbar.scss';

import avatar from './../../assets/image/avatar.jpg';

export default class UserNavbar extends Component {
  render() {
    return (
      <div className='user-navbar'>
        <div className='user-navbar__avatar'>
          <a href='/'>
            <img src={avatar} alt='avatar'/>
          </a> 
        </div>
        <div className='user-navbar__name'>
          <a href='/'>Дмитрий</a>
        </div>
      </div>
    )
  }
}