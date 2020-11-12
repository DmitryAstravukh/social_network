import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './user-profile.scss';

import defaultAvatar from './../../assets/image/default-avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGithubSquare, faInstagramSquare, faTwitterSquare, faVk, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import UserProfileStatus from '../user-profile-status';
import { getUserData, getUserStatus, updateUserStatus } from '../../reducers/profile';
import Spiner from '../spiner';
import { useParams, Redirect } from 'react-router-dom';

const UserProfileContact = ({type, icon}) => {
    return (
        <div className='contact'>
            <a href={type ? type : '#'} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={icon} />
                {type ? type : 'Не задано'}
            </a>
        </div>
    )
}

export const UserProfile = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const { userData, isLoadedUserData, status } = useSelector(({ profileReducer }) => profileReducer);

    useEffect(() => {
        if(userId && userId !== 'null') {
            dispatch(getUserStatus(userId));
            dispatch(getUserData(userId));
        }
    }, [userId])

    const avatar = userData.photos.large ? userData.photos.large : defaultAvatar;

    if(!userId || userId === 'null') return <Redirect to='/login' />
    if(!isLoadedUserData) return <Spiner />

    return (
        <div className='content-container'>
            <div className='user-profile'>

                <div className='user-avatar'>
                    <img src={avatar} alt={avatar}/>
                </div>

                <div className='user-data'>

                    <div className='user-data__about'>
                        <div className='full-name'>{userData.fullName}</div>
                        <div className='about-me'>
                            <UserProfileStatus status={status}
                                               updateUserStatus={updateUserStatus}/>
                        </div>
                    </div>

                    <div className='user-data__job'>
                        <span className='block-title'>Работа</span>
                        <div className='looking-job'>
                           В поиске работы: { userData.lookingForAJob ? 'Да' : 'Нет' }
                        </div>
                        <div className='looking-job-desc'>
                            Описание: { userData.lookingForAJobDescription ? userData.lookingForAJobDescription : 'Не задано' }
                        </div>
                    </div>

                    <div className='user-data__contacts'>
                        <span className='block-title'>Контакты</span>
                        <UserProfileContact type={userData.contacts.facebook} icon={faFacebookSquare} />
                        <UserProfileContact type={userData.contacts.github} icon={faGithubSquare} />
                        <UserProfileContact type={userData.contacts.instagram} icon={faInstagramSquare} />
                        <UserProfileContact type={userData.contacts.twitter} icon={faTwitterSquare} />
                        <UserProfileContact type={userData.contacts.vk} icon={faVk} />
                        <UserProfileContact type={userData.contacts.website} icon={faGlobe} />
                        <UserProfileContact type={userData.contacts.youtube} icon={faYoutubeSquare} />
                    </div>

                </div>
            </div>
        </div>

    )
}