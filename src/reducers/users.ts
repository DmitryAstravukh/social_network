import { UsersActions } from '../actions';
import { setUsers, toggleLoading, toggleFollow, toggleFollowInProgress } from '../actions/users';

import { UsersActionTypes } from '../actions_types/users';

import { UserItemType } from '../types/user';
import { ThunkType } from "../types/base";

import Api from '../api/api';
const api = new Api();

type UsersInitialState = {
    users: Array<UserItemType>,
    currentPage: number,
    pageSize: number,
    pageSizeSteps: Array<number>,
    totalCount: number,
    isLoading: boolean,
    followInProgress: Array<number>,
    error: string | null
}

const initialState: UsersInitialState = {
    users: [],
    currentPage: 1, //api default
    pageSize: 10, //api default
    pageSizeSteps: [10, 20, 50, 100],
    totalCount: 0,
    isLoading: true,
    followInProgress:[],
    error: null
}

//type ThunkType = ThunkAction<Promise<void>, UsersInitialState, unknown, UsersActions>;

export const toggleFollowing = (userId: number, followed: boolean): ThunkType<UsersActions, UsersInitialState> => async dispatch => {
    dispatch(toggleFollowInProgress(userId, true));

    const data = await api.toggleFollow(userId, followed);
    dispatch(toggleFollowInProgress(userId, false));

    if(data.resultCode === 0) dispatch(toggleFollow(userId))
}

export const getUsers = (currentPage: number, pageSize: number): ThunkType<UsersActions, UsersInitialState>  => async dispatch => {
    dispatch(toggleLoading(true));
    const data = await api.getUsers(currentPage, pageSize);

    dispatch(toggleLoading(false));
    dispatch(setUsers(data));
}


export const usersReducer = (state = initialState, action: UsersActions) => {
    switch (action.type) {
        case UsersActionTypes.SET_USERS:
            return {
                ...state,
                users: action.users.items,
                totalCount: action.users.totalCount,
                error: action.users.error
            }

        case UsersActionTypes.CHANGE_PAGE_SIZE:
            return { ...state, users: [], pageSize: action.pageSize }

        case UsersActionTypes.CHANGE_CURRENT_PAGE:
            return { ...state, currentPage: action.pageNumber }

        case UsersActionTypes.TOGGLE_LOADING:
            return { ...state, isLoading: action.isLoading }

        case UsersActionTypes.TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map((user: UserItemType) => {
                    if(user.id === action.userId) {
                        return {
                            ...user,
                            followed: !user.followed
                        }
                    }
                    return user
                })
            }


        case UsersActionTypes.TOGGLE_FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followInProgress: action.isFetching ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)

            }

        case UsersActionTypes.CLEAR_USERS_LIST:
            return { ...state, users: [] }

        default:
            return state;
    }
}
