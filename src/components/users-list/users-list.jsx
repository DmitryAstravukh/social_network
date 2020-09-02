import React, { Component } from 'react';
import './users-list.scss';
import SearchBar from '../search-bar';
import defaultAvatar from '../../assets/image/default-avatar.png';
import { Link } from 'react-router-dom';

const UserPreview = (props) => {
    const {
        id,
        name,
        followed,
        photos: {
            small,
            large
        },
        status
    } = props;

    const avatar = small !== null ? small : defaultAvatar;
    const btnText = followed ? 'Удалить из друзей' : 'Добавить в друзья';

    return (
        <div className='user-preview'>
            <div className='user-preview__data'>
                <div className='avatar'>
                    <img src={avatar} alt='avatar'/>
                </div>
                <div className='person-data'>
                    <Link to={`/user/${id}`} className='person-data__name'>{name}</Link>
                    <span className='person-data__status'>{status}</span>
                </div>
            </div>
            <div className='user-preview__controls'>
                <button>{btnText}</button>
            </div>
        </div>
    )
}

export default class UsersList extends Component {
    render() {
        console.log(this.props);
        const { users, totalCount } = this.props;
        return (
            <div className='content-container'>
                <div className='user-list'>
                    <div className='user-list__header'>
                        <div className='people-counter'>
                            Всего пользователей - <span>{totalCount}</span>
                        </div>
                        <SearchBar width='100%' textColor='#626c72' textSize='14px' />
                    </div>
                    <div className='user-list__body'>
                        {
                            users.map(user => {
                                return <UserPreview key={user.id} {...user}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}