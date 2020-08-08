import React, { Component } from 'react';
import './header.scss';

import SearchBar from './../search-bar';
import UserNavbar from './../user-navbar';

export default class Header extends Component {
  
  
  render() {
    return (
      <header className='user-header'>
        <SearchBar />
        <UserNavbar />
      </header>
    )   
  }
}