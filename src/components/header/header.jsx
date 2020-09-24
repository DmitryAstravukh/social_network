import React, {Component} from 'react';
import './header.scss';
import SearchBar from './../search-bar';
import logo from '../../assets/image/logo.svg';
import UserNavbar from '../user-navbar';

export default class Header extends Component {
    render() {
        const { login, id } = this.props;
        return (
            <header className='user-header'>
                <div className='user-header__logo'>
                    <a href='/'>
                        <img src={logo} alt='logo'/>
                    </a>
                </div>
                <SearchBar width='400px' textColor='#ffffff' textSize='16px'/>
                <UserNavbar login={login} id={id}/>
            </header>
        )
    }
}