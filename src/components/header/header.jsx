import React from 'react';
import './header.scss';
//import SearchBar from './../search-bar';
import logo from '../../assets/image/logo.svg';
import UserNavbar from '../user-navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export const Header = ({ login, id, isAuth }) => {
    return (
        <header className='user-header'>
            <div className='user-header__logo'>
                <a href='/'>
                    <img src={logo} alt='logo'/>
                </a>
            </div>
            {/*<SearchBar width='400px' textColor='#ffffff' textSize='16px'/>*/}
            <div className='user-header__auth '>
                {
                    isAuth ?
                        <UserNavbar login={login} id={id}/>
                        :
                        <NavLink className='' to='/login'>
                            <FontAwesomeIcon icon={faSignInAlt} />
                            Авторизация
                        </NavLink>
                }
            </div>
        </header>
    )
}