import {
    GET_USERS,
    SET_USERS,
    CHANGE_PAGE_SIZE,
    CHANGE_PAGE_NUMBER,
    TOGGLE_LOADING,
    TOGGLE_FOLLOW,
    TOGGLE_FOLLOW_IN_PROGRESS,
    CLEAR_USERS_LIST
} from './../actions_types/users';
import Api from '../api/api';
import { setUsers, toggleLoading, toggleFollow, toggleFollowInProgress } from './../actions/users';


const api = new Api();
const inicialState = {
    users: [],
    currentPage: 1, //api default
    pageSize: 10, //api default
    pageSizeSteps: [10, 20, 50, 100],
    totalCount: 0,
    isLoading: true,
    followInProgress:[]
}

const changePageSize = (state, pageSize) => {
    return {
        ...state,
        users: [],
        pageSize
    }
}

const changePageNumber = (state) => {
    return {
        ...state,
        currentPage: state.currentPage + 1
    }
}

const clearUsersList = (state) => {
    return {
        ...state,
        users: []
    }
}

export const toggleFollowing = (userId, followed) => async dispatch => {
    dispatch(toggleFollowInProgress(userId, true));

    const data = await api.toggleFollow(userId, followed);
    dispatch(toggleFollowInProgress(userId, false));

    if(data.resultCode === 0) dispatch(toggleFollow(userId))
}

export const getUsers = (currentPage, pageSize) => async dispatch => {
    dispatch(toggleLoading(true));
    const data = await api.getUsers(currentPage, pageSize);

    dispatch(toggleLoading(false));
    dispatch(setUsers(data));
}



const usersReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [
                    ...state.users,
                    ...action.users.items
                ],
                totalCount: action.users.totalCount
            }

        case CHANGE_PAGE_SIZE:
            return changePageSize(state, action.pageSize);

        case CHANGE_PAGE_NUMBER:
            return changePageNumber(state);

        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }

        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {
                            ...user,
                            followed: !user.followed
                        }
                    }
                    return user
                })
            }


        case TOGGLE_FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followInProgress: action.isFetching ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)

            }

        case CLEAR_USERS_LIST:
            return clearUsersList(state);

        default:
            return state;
    }
}

export default usersReducer;