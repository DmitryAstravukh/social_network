import React, { Component } from 'react';
import './user-profile.scss';

import defaultAvatar from './../../assets/image/default-avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGithubSquare, faInstagramSquare, faTwitterSquare, faVk, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

export default class UserProfile extends Component {

    render() {
        console.log(this.props);
        const { userData } = this.props;
        const avatar = userData.photos.large ? userData.photos.large : defaultAvatar;
        return (
            <div className='content-container'>
                <div className='user-profile'>

                    <div className='user-avatar'>
                        <img src={avatar} alt={avatar}/>
                    </div>

                    <div className='user-data'>

                        <div className='user-data__about'>
                            <div className='full-name'>{ userData.fullName }</div>
                            <div className='about-me'>
                                { userData.aboutMe ? userData.aboutMe : 'Не задано' }
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

                            <div className='contact'>
                                <Link to={userData.contacts.facebook ? userData.contacts.facebook : '#'}>
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                    {userData.contacts.facebook ? userData.contacts.facebook : 'Не задано'}
                                </Link>
                            </div>

                            <div className='contact'>
                                <Link to={userData.contacts.github ? userData.contacts.github : '#'}>
                                    <FontAwesomeIcon icon={faGithubSquare} />
                                    {userData.contacts.github ? userData.contacts.github : 'Не задано'}
                                </Link>
                            </div>
                            <div className='contact'>
                                <Link to={userData.contacts.instagram ? userData.contacts.instagram : '#'}>
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                    {userData.contacts.instagram ? userData.contacts.instagram : 'Не задано'}
                                </Link>
                            </div>
                            <div className='contact'>
                                <Link to={userData.contacts.twitter ? userData.contacts.twitter : '#'}>
                                    <FontAwesomeIcon icon={faTwitterSquare} />
                                    {userData.contacts.twitter ? userData.contacts.twitter : 'Не задано'}
                                </Link>
                            </div>
                            <div className='contact'>
                                <Link to={userData.contacts.vk ? userData.contacts.vk : '#'}>
                                    <FontAwesomeIcon icon={faVk} />
                                    {userData.contacts.vk ? userData.contacts.vk : 'Не задано'}
                                </Link>
                            </div>
                            <div className='contact'>
                                <Link to={userData.contacts.website ? userData.contacts.website : '#'}>
                                    <FontAwesomeIcon icon={faGlobe} />
                                    {userData.contacts.website ? userData.contacts.website : 'Не задано'}
                                </Link>
                            </div>
                            <div className='contact'>
                                <Link to={userData.contacts.youtube ? userData.contacts.youtube : '#'}>
                                    <FontAwesomeIcon icon={faYoutubeSquare} />
                                    {userData.contacts.youtube ? userData.contacts.youtube : 'Не задано'}
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}