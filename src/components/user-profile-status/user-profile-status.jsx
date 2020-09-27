import React, { Component } from 'react';
import './user-profile-status.scss';

export default class UserProfileStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    showEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    hideEditMode = () => {
        this.setState({
            editMode: false
        })
        // this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = e => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return this.state.editMode
            ? <input className='status-input'
                     type='text'
                     autoFocus
                     onChange={this.onStatusChange}
                     value={this.state.status} onBlur={this.hideEditMode}/>
            : <span className='status-text' onDoubleClick={this.showEditMode}>{this.state.status || 'не задано'}</span>
    }
}
