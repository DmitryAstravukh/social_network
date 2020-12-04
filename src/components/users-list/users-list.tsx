import React, {FC, useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers, toggleFollowing } from '../../reducers/users';
import { changePageSize, changeCurrentPage, clearUsersList } from '../../actions/users';
import { StateType } from "../../store";
import { UserItemType } from '../../types/user';

import SearchBar from '../search-bar';
import Spinner from '../spinner';

import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

import defaultAvatar from '../../assets/image/default-avatar.png';
import './users-list.scss';


type UserPreviewProps = {
    followInProgress: Array<number>,
    isAuth: boolean
}

const UserPreview: FC<UserPreviewProps & UserItemType> = (props) => {
    const dispatch = useDispatch();
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

    const onToggleFollowing = () => {
        dispatch(toggleFollowing(id, followed))
    }
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
                <button disabled={props.followInProgress.some(idArr => idArr === id) || !props.isAuth}
                        onClick={onToggleFollowing}>{btnText}</button>
            </div>
        </div>
    )
}

export const UsersList: FC = () => {
    console.log('render' + new Date().getMilliseconds())
    const dispatch = useCallback(useDispatch(), []);
    const { users, currentPage, pageSize, pageSizeSteps,
            totalCount, isLoading, followInProgress } = useSelector((state: StateType) => state.usersReducer);
    const { isAuth } = useSelector((state: StateType) => state.authReducer);

    useEffect((): () => void => {
        dispatch(getUsers(currentPage, pageSize));
        return () => dispatch(clearUsersList())
    }, [pageSize, currentPage, dispatch])

    const useStyles = makeStyles(theme => ({
        root: {
            '& .Mui-selected': {
                backgroundColor: '#8224e3',
                color:'#ffffff'
            }
        }
    }));
    const classes = useStyles();

    const onPaginationPageChange = (e: React.ChangeEvent<unknown>, pageNumber: number) => {
        dispatch(changeCurrentPage(pageNumber));
    }

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
                    { isLoading && <Spinner /> }
                    {
                        users.map(user => {
                            return <UserPreview key={user.id}
                                                followInProgress={followInProgress}
                                                isAuth={isAuth}
                                                {...user}/>
                        })
                    }
                </div>
                <div className='user-list__show-more'>
                    {
                        !isLoading &&
                            <Pagination count={Math.ceil(totalCount/pageSize)}
                                        page={currentPage}
                                        variant='outlined'
                                        shape='rounded'
                                        className={classes.root}
                                        disabled={isLoading}
                                        siblingCount={3}
                                        boundaryCount={1}
                                        onChange={onPaginationPageChange}
                            />
                    }
                </div>
            </div>
        </div>
    )
}