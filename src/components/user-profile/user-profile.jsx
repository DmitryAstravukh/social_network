import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './user-profile.scss';
import { useParams, Redirect } from 'react-router-dom';
import { changeUserPhoto, getUserData, updateUserStatus } from '../../reducers/profile';
import { ProfileData } from '../../selectors/profile';
import { setIsLoadedUserData } from '../../actions/profile';
import Spiner from '../spiner';
import UserProfileStatus from '../user-profile-status';

import defaultAvatar from './../../assets/image/default-avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGithubSquare, faInstagramSquare,
        faTwitterSquare, faVk, faYoutubeSquare
} from '@fortawesome/free-brands-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const UserProfileContact = ({type, icon}) => {
    return (
        <div className='contact'>
            <a href={type ? `https://${type}` : '#'} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={icon} />
                {type ? type : 'Не задано'}
            </a>
        </div>
    )
}

export const UserProfile = () => {
    console.log('ProfileRender -------- '+new Date().getMilliseconds());
    const { userId } = useParams();
    const dispatch = useDispatch();
    const isLoadedUserData = useSelector(({ profileReducer }) => profileReducer.isLoadedUserData);
    const [ userData, status ] = useSelector(state => ProfileData(state));
    //const { userData, status } = useSelector(({ profileReducer }) => profileReducer);
    const { id } = useSelector(({ authReducer }) => authReducer);
    const avatar = userData.photos.large ? userData.photos.large : defaultAvatar;

    useEffect(() => {
        if(userId && userId !== 'null') {
            dispatch(getUserData(userId))
        }
        return () => dispatch(setIsLoadedUserData(false))
    }, [userId])

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
    if(!isLoadedUserData) return <Spiner />

    const onUserPhotoChange = e => {
        const files = e.target.files;
        if(files.length > 0) dispatch(changeUserPhoto(files[0]))
    }

    console.log(userData);
    return (
        <div className='content-container'>
            <div className='user-profile'>

                <div className='user-avatar'>
                    <img src={avatar} alt={avatar}/>
                    {
                        +id === +userId &&
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
                                                   updateUserStatus={updateUserStatus}
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