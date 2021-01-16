import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Button from '@material-ui/core/Button';
import React, {FC, useCallback} from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import {Field, Form, Formik} from "formik";
import {UserDataContactsType, UserDataType, UserProfilePhotos} from "../../../types/profile";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {changeUserData} from "../../../reducers/profile";

type UserProfileDataEditProps = {
    open: boolean,
    handleClose: any,
    userData: UserDataType
}

const ProfileDataEditSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(3, 'Имя должно содержать хотя-бы 3 символа')
        .required('Введите Ваше имя'),
});

export const UserProfileDataEdit: FC<UserProfileDataEditProps> = ({ open, handleClose, userData }) => {
    const dispatch = useCallback(useDispatch(), []);
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

    const initialValues = {
        userId: userData.userId,
        aboutMe: userData.aboutMe,
        fullName: userData.fullName,
        lookingForAJob: userData.lookingForAJob,
        lookingForAJobDescription: userData.lookingForAJobDescription,

        facebook: userData.contacts.facebook,
        website: userData.contacts.website,
        vk: userData.contacts.vk,
        twitter: userData.contacts.twitter,
        instagram: userData.contacts.instagram,
        youtube: userData.contacts.youtube,
        github: userData.contacts.github,
        mainLink: userData.contacts.mainLink,

        photos: userData.photos
    };


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
                    <Formik
                        initialValues={initialValues}
                        validationSchema={ProfileDataEditSchema}
                        //TODO add type for values
                        onSubmit={(values: any, actions) => {
                            console.log(values);
                            const changedUserData: UserDataType = {
                                userId: values.userId,
                                lookingForAJob: values.lookingForAJob,
                                lookingForAJobDescription: values.lookingForAJobDescription,
                                fullName: values.fullName,
                                contacts: {
                                    github: values.github,
                                    vk: values.vk,
                                    facebook: values.facebook,
                                    instagram: values.instagram,
                                    twitter: values.twitter,
                                    website: values.website,
                                    youtube: values.youtube,
                                    mainLink: ''
                                },
                                photos: userData.photos,
                                aboutMe: 'Frontend-developer(React)',
                            }
                            console.log(changedUserData);
                            dispatch(changeUserData(changedUserData));
                            actions.setSubmitting(false);
                            handleClose();
                        }}
                    >
                        {({
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              values
                          }) =>{
                            console.log(values);
                            return (

                            <Form className={classes.editUserDataForm}>
                                <label htmlFor="profile-data-edit__full-name">Имя</label>
                                <Field id="profile-data-edit__full-name"
                                       name="fullName"
                                       placeholder="Имя"
                                       minLength="3"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.fullName}/>
                                {errors.fullName && touched.fullName ? (
                                    <div style={{color:'red'}}>{errors.fullName}</div>
                                ) : null}

                                <label htmlFor="profile-data-edit__description">Описание</label>
                                <Field id="profile-data-edit__description"
                                       name="lookingForAJobDescription"
                                       placeholder="Описание"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.lookingForAJobDescription}/>

                                <Field type='checkbox' 
                                       name='lookingForAJob'
                                       className='profile-data-edit__looking-job'
                                       id='profile-data-edit__looking-job'/>
                                <label htmlFor='profile-data-edit__looking-job'>В поиске работы</label>

                                <label htmlFor="profile-data-edit__github">github</label>
                                <Field id="profile-data-edit__github"
                                       name="github"
                                       placeholder="github"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.github}/>
                                <label htmlFor="profile-data-edit__vk">vk</label>
                                <Field id="profile-data-edit__vk"
                                       name="vk"
                                       placeholder="vk"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.vk}/>
                                <label htmlFor="profile-data-edit__facebook">facebook</label>
                                <Field id="profile-data-edit__facebook"
                                       name="facebook"
                                       placeholder="facebook"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.facebook}/>
                                <label htmlFor="profile-data-edit__instagram">instagram</label>
                                <Field id="profile-data-edit__instagram"
                                       name="instagram"
                                       placeholder="instagram"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.instagram}/>
                                <label htmlFor="profile-data-edit__twitter">twitter</label>
                                <Field id="profile-data-edit__twitter"
                                       name="twitter"
                                       placeholder="twitter"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.twitter}/>
                                <label htmlFor="profile-data-edit__website">website</label>
                                <Field id="profile-data-edit__website"
                                       name="website"
                                       placeholder="website"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.website}/>
                                <label htmlFor="profile-data-edit__youtube">youtube</label>
                                <Field id="profile-data-edit__youtube"
                                       name="youtube"
                                       placeholder="youtube"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.youtube}/>

                                <button type="submit"
                                        disabled={Boolean(errors.fullName)}>Изменить</button>
                            </Form>
                        )}
                        }

                    </Formik>
                </div>
            </Fade>
        </Modal>
    )
}