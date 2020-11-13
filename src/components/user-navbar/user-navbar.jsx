import React from 'react';
import './user-navbar.scss';

import avatar from './../../assets/image/avatar.jpg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { unLogin } from './../../reducers/auth';

export const UserNavbar = ({ login, id }) => {
    //TODO сделать переход на страницу авторизации после выхода
    const dispatch = useDispatch();
    return (
        <div className='user-navbar'>
            <div className='user-navbar__avatar'>
                <Link to={`/profile/${id}`}>
                    <img src={avatar} alt='avatar'/>
                </Link>
            </div>
            <div className='user-navbar__name'>
                <Link to={`/profile/${id}`}>{login}</Link>
            </div>
            <div className='user-navbar-logout' onClick={() => dispatch(unLogin())}>
                Выход
            </div>
        </div>
    )
}