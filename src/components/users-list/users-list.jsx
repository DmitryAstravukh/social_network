import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './users-list.scss';
import SearchBar from '../search-bar';
import defaultAvatar from '../../assets/image/default-avatar.png';
import { Link } from 'react-router-dom';
import { getUsers, toggleFollowing } from '../../reducers/users';
import { changePageSize, changePageNumber, clearUsersList } from './../../actions/users';

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
                    <Link to={`/profile/${id}`}>
                        <img src={avatar} alt='avatar'/>
                    </Link>
                </div>
                <div className='person-data'>
                    <Link to={`/profile/${id}`} className='person-data__name'>{name}</Link>
                    <span className='person-data__status'>{status}</span>
                </div>
            </div>
            <div className='user-preview__controls'>
                <button disabled={props.followInProgress.some(idArr => idArr === id)}
                        onClick={() => props.dispatch(props.toggleFollowing(id, followed))}>{btnText}</button>
            </div>
        </div>
    )
}

export const UsersList = () => {
    const dispatch = useDispatch();

    const { users, currentPage, pageSize, pageSizeSteps,
            totalCount, isLoading, followInProgress } = useSelector(({ usersReducer }) => usersReducer);

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize));
        //return () => dispatch(clearUsersList())
    }, [pageSize, currentPage])

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
                            <select value={pageSize} onChange={(e) => dispatch(changePageSize(+e.target.value))}>
                                {
                                    pageSizeSteps.map(step => {
                                        return <option key={step} value={step}>{step}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <SearchBar width='100%' height='40px' textColor='#626c72' textSize='14px' />
                </div>
                <div className='user-list__body'>
                    {
                        users.map(user => {
                            return <UserPreview key={user.id}
                                                toggleFollowing={toggleFollowing}
                                                followInProgress={followInProgress}
                                                dispatch={dispatch}
                                                {...user}/>
                        })
                    }
                </div>
                <div className='user-list__show-more'>
                    <button onClick={() => dispatch(changePageNumber())}
                            disabled={isLoading}>
                        {
                            isLoading ? 'Загрузка...' : 'Показать еще'
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}