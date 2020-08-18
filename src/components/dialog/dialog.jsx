import React, {Component} from 'react';
import './dialog.scss';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faTimes} from '@fortawesome/free-solid-svg-icons';
import avatar from './../../assets/image/avatar.jpg';
import SearchBar from '../search-bar';
import {NavLink} from 'react-router-dom';

class DialogItem extends Component {
    render() {
        return (
            <div className='dialog-item'>
                <div className='dialog-item__avatar'>
                    <NavLink to='/person/1'>
                        <img src={avatar} alt='avatar'/>
                    </NavLink>
                </div>
                <div className='dialog-item__data'>
                    <div className='owner'>
                        <NavLink to='/person/1'>Иванов Иван</NavLink>
                        <div className='date'>
                            <span>20.10.2020</span>
                            <span className='msg-time'>15.30</span>
                        </div>

                    </div>
                    <div className='messages'>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci alias aperiam aspernatur at atque cum debitis doloribus expedita minus nostrum perspiciatis quaerat, reprehenderit sit soluta tempore unde ut vel.</span>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, dolorum ea fuga illo illum impedit ipsam magnam molestias, porro quam quas quasi recusandae reprehenderit sint temporibus tenetur ullam velit voluptates?</span>
                    </div>
                </div>
            </div>
        )
    }
}

class DialogHeader extends Component {
    render() {
        return (
            <div className='dialog-header'>
                <div className='dialog-header__companion'>
                    <div className='avatar'>
                        <img src={avatar} alt='avatar'/>
                    </div>
                    <div className='name'>
                        <NavLink to='/person/1'>Иванов Иван</NavLink>
                    </div>
                </div>
                <div className='dialog-header__controls'>
                    <div className='search'>
                        <SearchBar width='200px' textColor='#626c72' textSize='14px' />
                    </div>
                    <div className='exit'>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
            </div>
        )
    }
}

export default class Dialog extends Component {
    render() {
        return (
            <div className='dialog'>
                <DialogHeader />
                <DialogItem />
                <DialogItem />
                <DialogItem />
                <DialogItem />
            </div>
        )
    }
}

