import React, { FC, useCallback, useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from "../../store";

import { getUserData } from '../../reducers/profile';
import { ProfileData } from '../../selectors/profile';
import { setIsLoadedUserData } from '../../actions/profile';

import { makeStyles, Theme } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';

import Spinner from '../spinner';
import UserProfileStatus from '../user-profile-status';

import defaultAvatar from './../../assets/image/default-avatar.png';
import './user-profile.scss';

import UserProfileAvatar from './user-profile-avatar';
import UserProfileContacts from './user-profile-contacts';
import UserProfileDataEdit from './user-profile-data-edit';


export const UserProfile: FC = () => {
    const { userId } = useParams<{userId: string}>();
    const dispatch = useCallback(useDispatch(), []);
    const isLoadedUserData = useSelector((state: StateType) => state.profileReducer.isLoadedUserData);
    const { userData, status } = useSelector((state: StateType) => ProfileData(state));
    const { id } = useSelector((state: StateType) => state.authReducer);
    const avatar = userData.photos.large ? userData.photos.large : defaultAvatar;

    const [open, setOpen] = useState(false);
    const handleOpen = () => (setOpen(true));
    const handleClose = () => (setOpen(false));


    useEffect((): () => void => {
        if(userId && userId !== 'null') {
            dispatch(getUserData(Number(userId)))
        }
        return () => dispatch(setIsLoadedUserData(false))
    }, [userId, dispatch])

    const useStyles = makeStyles((theme: Theme) => ({
        editMyData: {
            position: 'absolute',
            top: '12px',
            right: '10px',
            color: 'silver',
            fontSize: '18px',
            '&:hover': {
                color: '#8224e3',
                cursor: 'pointer'
            }
        }
    }));
    const classes = useStyles();

    if(!userId || userId === 'null') return <Redirect to='/login' />
    if(!isLoadedUserData) return <Spinner />

    return (
        <div className='content-container'>
            <div className='user-profile'>

                {/*<UserProfileDataEdit open={open}*/}
                {/*                     handleClose={handleClose}*/}
                {/*                     userData={userData}/>*/}

                <UserProfileAvatar userId={Number(userId)}
                                   id={Number(id)}
                                   avatar={avatar}
                />

                <div className='user-data'>

                    <div className='left'>
                        <div className='user-data__about'>
                            <div className='full-name'>{userData.fullName}</div>
                            <div className='about-me'>
                                <UserProfileStatus status={status}
                                                   authId={id}
                                                   userId={userId}
                                />
                            </div>
                        </div>

                        <div className='user-data__job'>
                            <span className='block-title'>Работа</span>
                            {
                                userId && userId !== 'null' && Number(userId) === Number(id) &&
                                <CreateIcon className={classes.editMyData} onClick={handleOpen}/>
                            }
                            <div className='looking-job'>
                                В поиске работы: { userData.lookingForAJob ? 'Да' : 'Нет' }
                            </div>
                            <div className='looking-job-desc'>
                                Описание: { userData.lookingForAJobDescription ? userData.lookingForAJobDescription : 'Не задано' }
                            </div>
                        </div>
                    </div>


                    <UserProfileContacts userData={userData}
                                         onEditDataModalClick={handleOpen}
                                         editIconStyle={classes.editMyData}
                                         userId={userId}
                                         authId={id}
                    />

                </div>
            </div>
        </div>

    )
}