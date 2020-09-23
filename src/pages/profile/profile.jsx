import React from 'react';
import './profile.scss';

import Header from './../../components/header';
import Navbar from '../../components/navbar';
import Content from '../../components/content';

const Profile = ({ login, id }) => {
  return (
    <div className='container'>
      <Header login={login} id={id}/>
      <div className='content'>
          <Navbar id={id}/>
          <Content />
      </div>

    </div>
  )
}

export default Profile;