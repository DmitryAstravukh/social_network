import React, {Component} from 'react';
import './user-navbar.scss';

import avatar from './../../assets/image/avatar.jpg';
import {Link} from 'react-router-dom';

export default class UserNavbar extends Component {
    render() {
        const {login, id} = this.props;
        return (
            <div className='user-navbar'>
                <div className='user-navbar__avatar'>
                    <Link to={`/profile/${id}`}>
                        <img src={avatar} alt='avatar'/>
                    </Link>
                </div>
                <div className='user-navbar__name'>
                    <Link to={`/profile/${id}`}>{login}</Link>
                </div>
            </div>
        )
    }
}