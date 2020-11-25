import React from 'react';
import './user-navbar.scss';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { unLogin } from '../../reducers/auth';
import defaultAvatar from '../../assets/image/default-avatar.png';

export const UserNavbar = ({ login, id, photos }) => {
    const dispatch = useDispatch();
    const avatar = photos.large ? photos.large : defaultAvatar;

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