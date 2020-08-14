import React from 'react';
import './profile.scss';

import Header from './../../components/header';
import Navbar from '../../components/navbar';

const Profile = () => {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
          <Navbar />
      </div>

    </div>
  )
}

export default Profile;