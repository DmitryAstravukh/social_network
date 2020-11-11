import React, { Component } from 'react';
import './login.scss';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';

const SigninForm = () => {
  return (
      <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Введите Email';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className='login-form' onSubmit={handleSubmit}>
              <div className='input-group'>
                <div className='input-group__email-signin'>
                  <input name='email'
                         type='email'
                         placeholder='Email'
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.email}/>
                  <FontAwesomeIcon icon={faUser} />
                  {errors.email && touched.email && errors.email}
                </div>
                <hr/>
                <div className='input-group__pass-signin'>
                  <input name='password'
                         type='password'
                         placeholder='Пароль'
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.password}/>
                  <FontAwesomeIcon icon={faKey} />
                  {errors.password && touched.password && errors.password}
                </div>
              </div>

              <div className='additional-functions'>
                <div className='remember-login'>
                  <input type='checkbox' name='rememberMe'
                         className='remember-login__checkbox'
                         id='remember-login__checkbox' />
                  <label htmlFor='remember-login__checkbox'>Запомнить меня</label>
                </div>
                <a href='/' className='lost-password'>Забыли пароль?</a>
              </div>

              <button className='login-btn-signin'
                      type='submit'
                      disabled={isSubmitting}>
                Войти
              </button>
            </form>
        )}
      </Formik>

  )
}

export const Login = () => {
    return (
      <div className='login-page'>
        <div className='login-page__content-signin'>
          <h1>Добро пожаловать</h1>
          <p>Войдите, чтобы общаться и делиться новостями</p>
          <SigninForm />
        </div>
      </div>
    )
}
