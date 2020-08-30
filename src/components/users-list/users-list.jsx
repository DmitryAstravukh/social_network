import React, { Component } from 'react';
import './users-list.scss';
import SearchBar from '../search-bar';
import defaultAvatar from '../../assets/image/avatar.jpg';

const UserPreview = () => {
    return (
        <div className='user-preview'>
            <div className='user-preview__data'>
                <div className='avatar'>
                    <img src={defaultAvatar} alt='avatar'/>
                </div>
                <div className='person-data'>
                    <span className='person-data__name'>Иванов Иван</span>
                    <span className='person-data__location'>США, Лос-Анджелес</span>
                </div>
            </div>
            <div className='user-preview__controls'>
                <button>Добавить в друзья</button>
            </div>
        </div>
    )
}

export default class UsersList extends Component {
    render() {
        return (
            <div className='content-container'>
                <div className='user-list'>
                    <div className='user-list__header'>
                        <div className='people-counter'>
                            Всего пользователей - <span>100</span>
                        </div>
                        <SearchBar width='100%' textColor='#626c72' textSize='14px' />
                    </div>
                    <div className='user-list__body'>
                        <UserPreview />
                        <UserPreview />
                        <UserPreview />
                        <UserPreview />
                        <UserPreview />
                        <UserPreview />
                        <UserPreview />
                        <UserPreview />
                        <UserPreview />
                        <UserPreview />
                        <UserPreview />
                        <UserPreview />
                        <UserPreview />
                        <UserPreview />
                    </div>
                </div>
            </div>
        )
    }
}