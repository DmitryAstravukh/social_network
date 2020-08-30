import React, {Component} from 'react';
import './navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faNewspaper, faMusic, faVideo, faUserFriends, faUsers } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar-container'>
                <ul className='navbar-list'>
                    <li className='navbar-list__item'>
                      <NavLink to='/profile'>
                          <FontAwesomeIcon icon={faUser} />
                          Профиль
                      </NavLink>
                    </li>
                    <li className='navbar-list__item'>
                        <NavLink to='/friends'>
                            <FontAwesomeIcon icon={faUserFriends} />
                            Друзья
                        </NavLink>
                    </li>
                    <li className='navbar-list__item'>
                        <NavLink to='/users'>
                            <FontAwesomeIcon icon={faUsers} />
                            Пользователи
                        </NavLink>
                    </li>
                    <li className='navbar-list__item'>
                      <NavLink to='/messages'>
                          <FontAwesomeIcon icon={faEnvelope} />
                          Сообщения
                      </NavLink>
                    </li>
                    <li className='navbar-list__item'>
                      <NavLink to='/news'>
                          <FontAwesomeIcon icon={faNewspaper} />
                          Новости
                      </NavLink>
                    </li>
                    <li className='navbar-list__item'>
                      <NavLink to='/music'>
                          <FontAwesomeIcon icon={faMusic} />
                          Музыка
                      </NavLink>
                    </li>
                    <li className='navbar-list__item'>
                      <NavLink to='/videos'>
                          <FontAwesomeIcon icon={faVideo} />
                          Видео
                      </NavLink>
                    </li>
                </ul>
            </nav>

        )
    }
}