import React, {Component} from 'react';
import './news.scss';
import AddPostContainer from '../../containers/add-post-container';
import PostContainer from '../../containers/post-container';

export  default class News extends Component {
    render() {
        return (
            <div className='content-container'>
                <AddPostContainer />
                <PostContainer />
            </div>
        )
    }
}