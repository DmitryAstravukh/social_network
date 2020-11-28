import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateType } from '../../store';

import UserNavbar from '../user-navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/image/logo.svg';

import './header.scss';

export const Header: FC = () => {
    const { id, login, isAuth, photos } = useSelector((state: StateType) => state.authReducer);
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
                            <UserNavbar id={id} login={login} photos={photos}/>
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