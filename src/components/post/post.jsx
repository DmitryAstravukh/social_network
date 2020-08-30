import React, {Component} from 'react';
import './post.scss';

import defaultAvatar from './../../assets/image/default-avatar.png';
import avatar from './../../assets/image/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare, faChevronDown, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class Post extends Component {
    render() {
        const {
            ownerId,
            ownerName,
            ownerAvatar,
            releaseDate,
            text,
            likes,
            views
        } = this.props;

        return (
            <div className='post'>
                <div className='post-header'>
                    <div className='post-header__owner-data'>
                        <div className='avatar'>
                            <Link to={`/users/${ownerId}`}>
                                <img src={ownerAvatar !== '' ? ownerAvatar : defaultAvatar} alt='avatar'/>
                            </Link>
                        </div>
                        <div className='data'>
                            <Link to={`/users/${ownerId}`} className='name'>{ownerName}</Link>
                            <span className='release-date'>{releaseDate}</span>
                        </div>
                    </div>
                    <div className='post-header__functions'>
                        <span className='chevron-down'>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </span>
                        {/*
                        TODO: add functions menu
                        */}
                    </div>
                </div>

                <div className='post-body'>
                    <div className="post-body__text">{text}</div>
                    <div className="post-body__images">
                        <img src={avatar} alt='avatar'/>
                    </div>
                </div>

                <div className='post-footer'>
                    <div className="post-footer__controls">
                        <div className='controls-like'>
                            <FontAwesomeIcon icon={faHeart}/>
                            <span>{likes}</span>
                        </div>
                        <div className='controls-share'>
                            <FontAwesomeIcon icon={faShare}/>
                        </div>
                    </div>
                    <div className="post-footer__views">
                        <FontAwesomeIcon icon={faEye}/>
                        <span>{views}</span>
                    </div>
                </div>
            </div>

        )
    }
}