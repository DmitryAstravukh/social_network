import React, { useState, useEffect } from 'react';
import './user-profile-status.scss';
import { useDispatch } from 'react-redux';

export const UserProfileStatus = ({ status, updateUserStatus }) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [stateStatus, setStateStatus] = useState(status);

    const hideEditMode = () => {
        setEditMode(false);
        dispatch(updateUserStatus(stateStatus));
    }

    useEffect(() => {
        setStateStatus(status)
    }, [status])

    return editMode
        ? <input className='status-input'
                 type='text'
                 autoFocus
                 onChange={e => setStateStatus(e.currentTarget.value)}
                 value={stateStatus} onBlur={hideEditMode}/>
        : <span className='status-text' onDoubleClick={() => setEditMode(true)}>{stateStatus || 'не задано'}</span>


}
