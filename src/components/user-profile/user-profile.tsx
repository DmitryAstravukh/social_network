import React, {FC, useCallback, useEffect} from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from "../../store";

import { changeUserPhoto, getUserData } from '../../reducers/profile';
import { ProfileData } from '../../selectors/profile';
import { setIsLoadedUserData } from '../../actions/profile';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGithubSquare, faInstagramSquare,
        faTwitterSquare, faVk, faYoutubeSquare
} from '@fortawesome/free-brands-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Spinner from '../spinner';
import UserProfileStatus from '../user-profile-status';

import defaultAvatar from './../../assets/image/default-avatar.png';
import './user-profile.scss';

type UserProfileContactProps = {
    type: string | null,
    icon: any
}
const UserProfileContact: FC<UserProfileContactProps> = ({type, icon}) => {
    return (
        <div className='contact'>
            <a href={type ? `https://${type}` : '#'} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={icon} />
                {type ? type : 'Не задано'}
            </a>
        </div>
    )
}


export const UserProfile: FC = () => {
    const { userId } = useParams<{userId: string}>();
    const dispatch = useCallback(useDispatch(), []);
    const isLoadedUserData = useSelector((state: StateType) => state.profileReducer.isLoadedUserData);
    const { userData, status } = useSelector((state: StateType) => ProfileData(state));
    const { id } = useSelector((state: StateType) => state.authReducer);
    const avatar = userData.photos.large ? userData.photos.large : defaultAvatar;

    useEffect((): () => void => {
        if(userId && userId !== 'null') {
            dispatch(getUserData(Number(userId)))
        }
        return () => dispatch(setIsLoadedUserData(false))
    }, [userId, dispatch])

    const useStyles = makeStyles(theme => ({
        input: { display: 'none' },
        button: {
            backgroundColor: '#8224e3',
            width: '100%',
            marginTop: '10px'
        }
    }));
    const classes = useStyles();

    if(!userId || userId === 'null') return <Redirect to='/login' />
    if(!isLoadedUserData) return <Spinner />

    const onUserPhotoChange = (e: any) => {
        const files = e.target.files;
        if(files.length > 0) dispatch(changeUserPhoto(files[0]))
    }

    return (
        <div className='content-container'>
            <div className='user-profile'>

                <div className='user-avatar'>
                    <img src={avatar} alt={avatar}/>
                    {
                        Number(id) === Number(userId) &&
                        <>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                type="file"
                                onChange={onUserPhotoChange}
                            />
                            <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span" className={classes.button}>
                            Изменить
                            </Button>
                            </label>
                        </>
                    }

                </div>

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
                            <div className='looking-job'>
                                В поиске работы: { userData.lookingForAJob ? 'Да' : 'Нет' }
                            </div>
                            <div className='looking-job-desc'>
                                Описание: { userData.lookingForAJobDescription ? userData.lookingForAJobDescription : 'Не задано' }
                            </div>
                        </div>
                    </div>


                    <div className='user-data__contacts'>
                        <span className='block-title'>Контакты</span>
                        <UserProfileContact type={userData.contacts.facebook} icon={faFacebookSquare} />
                        <UserProfileContact type={userData.contacts.github} icon={faGithubSquare} />
                        <UserProfileContact type={userData.contacts.instagram} icon={faInstagramSquare} />
                        <UserProfileContact type={userData.contacts.twitter} icon={faTwitterSquare} />
                        <UserProfileContact type={userData.contacts.vk} icon={faVk} />
                        <UserProfileContact type={userData.contacts.website} icon={faGlobe} />
                        <UserProfileContact type={userData.contacts.youtube} icon={faYoutubeSquare} />
                    </div>

                </div>
            </div>
        </div>

    )
}