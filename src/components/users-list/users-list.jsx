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
        const { users, totalCount, changePageSize, changePageNumber } = this.props;
        return (
            <div className='content-container'>
                <div className='user-list'>
                    <div className='user-list__header'>
                        <div className='people-counter'>
                            <div className='people-counter__all-count'>
                                Всего пользователей - <span>{totalCount}</span>
                            </div>
                            <div className='people-counter__count'>
                                Показывать по:
                                <select onChange={(e) => changePageSize(+e.target.value)}>
                                    <option value='10'>10</option>
                                    <option value='20'>20</option>
                                    <option value='50'>50</option>
                                    <option value='100'>100</option>
                                </select>
                            </div>
                        </div>
                        <SearchBar width='100%' height='40px' textColor='#626c72' textSize='14px' />
                    </div>
                    <div className='user-list__body'>
                        {
                            users.map(user => {
                                return <UserPreview key={user.id} {...user}/>
                            })
                        }
                    </div>
                    <div className='user-list__show-more'>
                        <button onClick={changePageNumber}>Показать еще</button>
                    </div>
                </div>
            </div>
        )
    }
}