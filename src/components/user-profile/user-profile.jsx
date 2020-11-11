import React, { Component } from 'react';
import './user-profile.scss';

import defaultAvatar from './../../assets/image/default-avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGithubSquare, faInstagramSquare, faTwitterSquare, faVk, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import UserProfileStatus from '../user-profile-status';
import {updateUserStatus} from '../../reducers/profile';

export default class UserProfile extends Component {
    //TODO не обновляется при переходе с чужого профиля на свой
    render() {
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
                                <UserProfileStatus status={ this.props.status }
                                                   updateUserStatus={this.props.updateUserStatus}/>
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
                                <a href={userData.contacts.facebook ? userData.contacts.facebook : '#'} target='_blank'>
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                    {userData.contacts.facebook ? userData.contacts.facebook : 'Не задано'}
                                </a>
                            </div>

                            <div className='contact'>
                                <a href={userData.contacts.github ? userData.contacts.github : '#'} target='_blank'>
                                    <FontAwesomeIcon icon={faGithubSquare} />
                                    {userData.contacts.github ? userData.contacts.github : 'Не задано'}
                                </a>
                            </div>
                            <div className='contact'>
                                <a href={userData.contacts.instagram ? userData.contacts.instagram : '#'} target='_blank'>
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                    {userData.contacts.instagram ? userData.contacts.instagram : 'Не задано'}
                                </a>
                            </div>
                            <div className='contact'>
                                <a href={userData.contacts.twitter ? userData.contacts.twitter : '#'} target='_blank'>
                                    <FontAwesomeIcon icon={faTwitterSquare} />
                                    {userData.contacts.twitter ? userData.contacts.twitter : 'Не задано'}
                                </a>
                            </div>
                            <div className='contact'>
                                <a href={userData.contacts.vk ? userData.contacts.vk : '#'} target='_blank'>
                                    <FontAwesomeIcon icon={faVk} />
                                    {userData.contacts.vk ? userData.contacts.vk : 'Не задано'}
                                </a>
                            </div>
                            <div className='contact'>
                                <a href={userData.contacts.website ? userData.contacts.website : '#'} target='_blank'>
                                    <FontAwesomeIcon icon={faGlobe} />
                                    {userData.contacts.website ? userData.contacts.website : 'Не задано'}
                                </a>
                            </div>
                            <div className='contact'>
                                <a href={userData.contacts.youtube ? userData.contacts.youtube : '#'} target='_blank'>
                                    <FontAwesomeIcon icon={faYoutubeSquare} />
                                    {userData.contacts.youtube ? userData.contacts.youtube : 'Не задано'}
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}