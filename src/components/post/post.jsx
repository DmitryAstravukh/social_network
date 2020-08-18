import React, {Component} from 'react';
import './post.scss';

import avatar from './../../assets/image/avatar.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faShare, faChevronDown, faEye} from '@fortawesome/free-solid-svg-icons';

export default class Post extends Component {
    render() {
        return (
            <div className='post'>
                <div className='post-header'>
                    <div className='post-header__owner-data'>
                        <div className='avatar'>
                            <a href='/'>
                                <img src={avatar} alt='avatar'/>
                            </a>
                        </div>
                        <div className='data'>
                            <a href='/' className='name'>Дмитрий Астраух</a>
                            <span className='release-date'>17.08.2020</span>
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
                    <div className="post-body__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusamus animi aspernatur, beatae dolor ipsam officiis quia sit tenetur voluptas.
                        Aliquid amet aperiam aspernatur commodi distinctio doloribus, harum ipsam possimus reprehenderit!
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusamus animi aspernatur, beatae dolor ipsam officiis quia sit tenetur voluptas.
                        Aliquid amet aperiam aspernatur commodi distinctio doloribus, harum ipsam possimus reprehenderit!
                    </div>
                    <div className="post-body__images">
                        <img src={avatar} alt='avatar'/>
                    </div>
                </div>

                <div className='post-footer'>
                    <div className="post-footer__controls">
                        <div className='controls-like'>
                            <FontAwesomeIcon icon={faHeart}/>
                            <span>8</span>
                        </div>
                        <div className='controls-share'>
                            <FontAwesomeIcon icon={faShare}/>
                        </div>
                    </div>
                    <div className="post-footer__views">
                        <FontAwesomeIcon icon={faEye}/>
                        <span>100</span>
                    </div>
                </div>
            </div>

        )
    }
}