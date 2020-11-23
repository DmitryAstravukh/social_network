import React from 'react';
import './header.scss';
import logo from '../../assets/image/logo.svg';
import UserNavbar from '../user-navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
    const { id, login, isAuth, photos } = useSelector(({ authReducer }) => authReducer);
    return (
        <header className='user-header'>
            <div className='user-header-content'>
                <div className='user-header__logo'>
                    <a href='/'>
                        <img src={logo} alt='logo'/>
                    </a>
                </div>
                <div className='user-header__auth '>
                    {
                        isAuth ?
                            <UserNavbar login={login} id={id} photos={photos}/>
                            :
                            <NavLink className='' to='/login'>
                                <FontAwesomeIcon icon={faSignInAlt} />
                                Авторизация
                            </NavLink>
                    }
                </div>
            </div>
        </header>
    )
}