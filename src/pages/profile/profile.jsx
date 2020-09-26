import React from 'react';
import './profile.scss';

import Header from './../../components/header';
import Navbar from '../../components/navbar';
import Content from '../../components/content';

const Profile = ({ login, id, isAuth }) => {
  return (
    <div className='container'>
      <Header login={login} id={id} isAuth={isAuth}/>
      <div className='content'>
          <Navbar id={id}/>
          <Content />
      </div>

    </div>
  )
}

export default Profile;