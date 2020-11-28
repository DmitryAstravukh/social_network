import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { unLogin } from '../../reducers/auth';
import { UserProfilePhotos } from '../../types/profile';

import defaultAvatar from '../../assets/image/default-avatar.png';
import './user-navbar.scss';

type UserNavbarProps = {
    id: number | null
    login: string | null,
    photos: UserProfilePhotos
}
export const UserNavbar: FC<UserNavbarProps> = ({ id, login, photos }) => {
    const dispatch = useDispatch();
    const avatar = photos.large ? photos.large : defaultAvatar;

    const unLoginUser = () => dispatch(unLogin());
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
            <div className='user-navbar-logout' onClick={unLoginUser}>
                Выход
            </div>
        </div>
    )
}