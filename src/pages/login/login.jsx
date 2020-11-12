import React, { Component } from 'react';
import './login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SigninSchema = Yup.object().shape({
    email: Yup.string()
        .email('Введите Email в формате example@site.com')
        .required('Введите Email в формате example@site.com'),
    password: Yup.string()
        .min(3, 'Пароль слишком короткий!')
        .max(20, 'Пароль слишком длинный!')
        .required('Поле должно содержать от 3 до 20 символов'),
});

const inicialValueSignInForm = {
    email: '',
    password: '',
    rememberMe: false
}

const SigninForm = () => {
  return (
      <Formik
          initialValues={inicialValueSignInForm}
          validationSchema={SigninSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
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
                  <Field name='email'
                         type='email'
                         placeholder='Email'
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.email}
                  />
                  <FontAwesomeIcon icon={faUser} />
                  {errors.email && touched.email ? <div className='failed-vlidation-auth'>{errors.email}</div> : null}
                </div>
                <hr/>
                <div className='input-group__pass-signin'>
                  <Field name='password'
                         type='password'
                         placeholder='Пароль'
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.password}
                         minLength='3'
                         maxLength='20'
                  />
                  <FontAwesomeIcon icon={faKey} />
                  {errors.password && touched.password ? <div className='failed-vlidation-auth'>{errors.password}</div> : null}
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
