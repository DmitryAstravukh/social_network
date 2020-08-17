import React from 'react';
import './profile.scss';

import Header from './../../components/header';
import Navbar from '../../components/navbar';
import Content from '../../components/content';

const Profile = () => {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
          <Navbar />
          <Content />
      </div>

    </div>
  )
}

export default Profile;