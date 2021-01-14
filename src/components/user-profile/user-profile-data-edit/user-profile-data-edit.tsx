import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Button from '@material-ui/core/Button';
import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { Field } from "formik";

type UserProfileDataEditProps = {
    open: boolean,
    handleClose: any
}

export const UserProfileDataEdit: FC<UserProfileDataEditProps> = ({ open, handleClose }) => {
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
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            width: '250px',
            backgroundColor: '#ffffff',
            border: '1px solid silver',
            borderRadius: '5px',
        },
        editUserDataForm: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            padding: '10px',
            boxSizing: 'border-box'
        },
        editUserDataInput: {
            marginBottom: '7px',
            border: '1px solid silver',
            borderRadius: '3px',
            padding: '5px',
            boxSizing: 'border-box'
        }
    }));
    const classes = useStyles();

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <form className={classes.editUserDataForm} noValidate autoComplete="off">
                        {/*<Field id="firstName" name="firstName" placeholder="First Name" />*/}
                        {/*<button type="submit">Submit</button>*/}
                        //TODO add formik
                    </form>
                </div>
            </Fade>
        </Modal>
    )
}