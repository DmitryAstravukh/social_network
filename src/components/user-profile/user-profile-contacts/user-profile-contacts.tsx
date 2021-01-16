import React, { FC } from "react";
import { UserDataType } from './../../../types/profile'

import CreateIcon from "@material-ui/icons/Create";
import {
    faFacebookSquare,
    faGithubSquare,
    faInstagramSquare,
    faTwitterSquare,
    faVk, faYoutubeSquare
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './user-profile-contacts.scss';


type UserProfileContactProps = {
    type: string | null,
    icon: any
}

type UserProfileContactsProps = {
    userData: UserDataType,
    onEditDataModalClick: any,
    editIconStyle: any,
    userId: string,
    authId: number | null
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

export const UserProfileContacts: FC<UserProfileContactsProps> = (
    {
        userData,
        onEditDataModalClick,
        editIconStyle,
        userId,
        authId
    }) => {
    return (
        <div className='user-data__contacts'>
            <span className='block-title'>Контакты</span>
            {
                userId && userId !== 'null' && Number(userId) === Number(authId) &&
                <CreateIcon className={editIconStyle} onClick={onEditDataModalClick}/>
            }

            <UserProfileContact type={userData.contacts.facebook} icon={faFacebookSquare} />
            <UserProfileContact type={userData.contacts.github} icon={faGithubSquare} />
            <UserProfileContact type={userData.contacts.instagram} icon={faInstagramSquare} />
            <UserProfileContact type={userData.contacts.twitter} icon={faTwitterSquare} />
            <UserProfileContact type={userData.contacts.vk} icon={faVk} />
            <UserProfileContact type={userData.contacts.website} icon={faGlobe} />
            <UserProfileContact type={userData.contacts.youtube} icon={faYoutubeSquare} />
        </div>
    )
}