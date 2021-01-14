import React, { FC, useCallback } from "react";
import { changeUserPhoto } from "../../../reducers/profile";
import { useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import { makeStyles, Theme } from "@material-ui/core/styles";

import './user-profile-avatar.scss';

type UserProfileAvatarProps = {
    userId: number,
    id: number,
    avatar: string
}

export const UserProfileAvatar:FC<UserProfileAvatarProps> = ({userId, id, avatar}) => {
    const dispatch = useCallback(useDispatch(), []);

    const useStyles = makeStyles((theme: Theme) => ({
        input: { display: 'none' },
        button: {
            backgroundColor: '#8224e3',
            width: '100%',
            marginTop: '10px'
        }
    }));
    const classes = useStyles();

    const onUserPhotoChange = (e: any) => {
        const files = e.target.files;
        if(files.length > 0) dispatch(changeUserPhoto(files[0]))
    }

    return (
        <div className='user-avatar'>
            <img src={avatar} alt={avatar}/>
            {
                id === userId &&
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
    )
}