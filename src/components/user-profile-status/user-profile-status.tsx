import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserStatus } from '../../reducers/profile';

import './user-profile-status.scss';

type UserProfileStatusProps = {
    status: string | null,
    authId: number | null,
    userId: string
}

export const UserProfileStatus: FC<UserProfileStatusProps> = ({ status, authId, userId }) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [stateStatus, setStateStatus] = useState<string | null>(status);

    const hideEditMode = () => {
        setEditMode(false);
        dispatch(updateUserStatus(stateStatus));
    }

    useEffect(() => {
        setStateStatus(status)
    }, [status])


    if(userId && userId !== 'null' && Number(userId) === Number(authId)) {
        return (
            editMode ?
                <input className='status-input'
                     type='text'
                     autoFocus
                     onChange={e => setStateStatus(e.currentTarget.value)}
                     value={stateStatus || ''}
                     onBlur={hideEditMode}
                />
                :
                <span className='status-text' onDoubleClick={() => setEditMode(true)}>{stateStatus || 'не задано'}</span>
        )}

    return (<span className='status-text'>{stateStatus || 'не задано'}</span>)
}
