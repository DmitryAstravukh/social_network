import React, {Component} from 'react';
import './header.scss';
import SearchBar from './../search-bar';
import logo from '../../assets/image/logo.svg';
import UserNavbar from '../user-navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserFriends} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
    render() {
        const { login, id, isAuth } = this.props;

        return (
            <header className='user-header'>
                <div className='user-header__logo'>
                    <a href='/'>
                        <img src={logo} alt='logo'/>
                    </a>
                </div>
                <SearchBar width='400px' textColor='#ffffff' textSize='16px'/>
                {
                    isAuth ?
                        <UserNavbar login={login} id={id}/>
                        :
                        <NavLink to='/login'>Войти</NavLink>
                }

            </header>
        )
    }
}