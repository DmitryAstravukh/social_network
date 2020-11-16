import React from 'react';
import './login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { login } from '../../reducers/auth';
import { Redirect } from 'react-router-dom';

const SigninSchema = Yup.object().shape({
    email: Yup.string()
        .email('Введите Email в формате example@site.com')
        .required('Введите Email в формате example@site.com'),
    password: Yup.string()
        .min(3, 'Пароль слишком короткий!')
        .max(20, 'Пароль слишком длинный!')
        .required('Поле должно содержать от 3 до 20 символов'),
});

const SigninForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
}) => {
    const { errorMessage, captchaUrl } = useSelector(({ authReducer }) => authReducer);

    return (
        <form className='login-form' onSubmit={handleSubmit}>
          <div className='input-group'>
            <div className='input-group__email-signin'>
              <Field name='email'
                     type='email'
                     placeholder='Email'
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.email}
              />
              <FontAwesomeIcon icon={faUser} />
              {errors.email && touched.email ? <div className='failed-validation-auth'>{errors.email}</div> : null}
            </div>
            <div className='input-group__pass-signin'>
              <Field name='password'
                     type='password'
                     placeholder='Пароль'
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.password}
              />
              <FontAwesomeIcon icon={faKey} />
              {errors.password && touched.password ? <div className='failed-validation-auth'>{errors.password}</div> : null}
            </div>
          </div>

          <div className='additional-functions'>
            <div className='remember-login'>
              <Field type='checkbox' name='rememberMe'
                     className='remember-login__checkbox'
                     id='remember-login__checkbox' />
              <label htmlFor='remember-login__checkbox'>Запомнить меня</label>
            </div>
            <a href='/' className='lost-password'>Забыли пароль?</a>
          </div>

            {
                captchaUrl ?
                    <div style={{textAlign:'center'}}>
                        <img src={captchaUrl} alt='captcha'/>
                        <Field type='text'
                               name='captcha'
                               className='auth-captcha-input'
                               placeholder='Введите данные с картинки'
                               required
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.captcha}/>
                    </div>
                    : null
            }

          <button className='login-btn-signin'
                  type='submit'
                  disabled={isSubmitting}>
            Войти
          </button>
            {errorMessage ? <div className='failed-validation-auth'>{errorMessage}</div> : null}

        </form>
    )
}


export const Login = () => {
    const inicialValueSignInForm = {
        email: '',
        password: '',
        rememberMe: false,
        captcha: ''
    }
    const dispatch = useDispatch();
    const { id, isAuth } = useSelector(({ authReducer }) => authReducer);

    const onSubmit = ({email, password, rememberMe, captcha}, { setSubmitting }) => {
        dispatch(login(email, password, rememberMe, captcha));
        setSubmitting(false);
    }

    if(isAuth) return <Redirect to={`/profile/${id}`} />

    return (
      <div className='login-page'>
        <div className='login-page__content-signin'>
          <h1>Добро пожаловать</h1>
          <p>Войдите, чтобы общаться и делиться новостями</p>
            <Formik
                initialValues={inicialValueSignInForm}
                validationSchema={SigninSchema}
                render={SigninForm}
                onSubmit={onSubmit}
            />
        </div>
      </div>
    )
}
