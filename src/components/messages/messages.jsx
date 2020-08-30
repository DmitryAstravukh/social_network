import React, {Component, Fragment} from 'react';
import './messages.scss';

import avatar from './../../assets/image/avatar.jpg';
import {NavLink, Link} from 'react-router-dom';
import Dialog from '../dialog';

class MessagePreview extends Component {
    render() {
        const { id } = this.props;
        return (
            <Fragment>
                {/* !Параметры в to должны быть разными чтобы не выделялись сразу все ссылки активными! */}
                <NavLink to={`/messages/${id}`} className='message-preview'>
                    <div className='message-preview__avatar'>
                        <img src={avatar} alt='avatar'/>
                        <div className='msg-cnt'>
                            <span>5</span>
                        </div>
                    </div>
                    <div className='message-preview__data'>
                        <div className='owner'>
                            <span className='name'>
                                Иванов Иван
                            </span>
                            <div className='time'>
                                15.30
                            </div>
                        </div>
                        <div className='message'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto beatae blanditiis, deleniti dolorum expedita ipsam itaque molestiae necessitatibus neque odit officiis perferendis, placeat porro quae suscipit unde ut vel?
                        </div>
                    </div>
                </NavLink>
            </Fragment>
        )
    }
}

class MessagePreviewList extends Component {
    render() {
        let m = [1,2,3,4,5,6,7,8,9];
        return (
            <div className='message-preview-list'>
                {
                    m.map((i) =>{
                        return <MessagePreview id={i} key={i}/>
                    })
                }
            </div>
        )
    }
}

export default class Messages extends Component {
    render() {
        return (
            <div className='messages-container'>
                <MessagePreviewList />
                <Dialog />
            </div>
        )
    }
}