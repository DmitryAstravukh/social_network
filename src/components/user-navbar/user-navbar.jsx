import React from 'react';
import './user-navbar.scss';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { unLogin } from './../../reducers/auth';
import defaultAvatar from '../../assets/image/default-avatar.png';
import { ProfileData } from '../../selectors/profile';

export const UserNavbar = ({ login, id }) => {
    const [ userData ] = useSelector(state => ProfileData(state));
    const avatar = userData.photos.large ? userData.photos.large : defaultAvatar;
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