import React from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faNewspaper, faUserFriends, faUsers } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ListItem = ({ to, icon, text }) => {
    return (
        <li className='navbar-list__item'>
            <NavLink to={to}>
                <FontAwesomeIcon icon={icon} />
                {text}
            </NavLink>
        </li>
    )
}

export const Navbar = () => {
    const { id } = useSelector(({ authReducer }) => authReducer);
    return (
        <nav className='navbar-container'>
            <ul className='navbar-list'>
                <ListItem to={`/profile/${id}`} icon={faUser} text='Профиль'/>
                <ListItem to='/friends' icon={faUserFriends} text='Друзья'/>
                <ListItem to='/users' icon={faUsers} text='Пользователи'/>
                <ListItem to='/messages' icon={faEnvelope} text='Сообщения'/>
                <ListItem to='/news' icon={faNewspaper} text='Новости'/>
            </ul>
        </nav>
    )
}