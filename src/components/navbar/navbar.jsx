import React, {Component} from 'react';
import './navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faNewspaper, faMusic, faVideo } from '@fortawesome/free-solid-svg-icons';


export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar-container'>
                <ul className='navbar-list'>
                    <li className='navbar-list__item'>
                      <FontAwesomeIcon icon={faUser} />
                      <a href='/'>Профиль</a>
                    </li>
                    <li className='navbar-list__item'>
                      <FontAwesomeIcon icon={faEnvelope} />
                      <a href='/'>Сообщения</a>
                    </li>
                    <li className='navbar-list__item'>
                      <FontAwesomeIcon icon={faNewspaper} />
                      <a href='/'>Новости</a>
                    </li>
                    <li className='navbar-list__item'>
                      <FontAwesomeIcon icon={faMusic} />
                      <a href='/'>Музыка</a>
                    </li>
                    <li className='navbar-list__item'>
                      <FontAwesomeIcon icon={faVideo} />
                      <a href='/'>Видео</a>
                    </li>
                </ul>
            </nav>

        )
    }
}