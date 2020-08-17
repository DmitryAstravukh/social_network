import React, {Component} from 'react';
import './news.scss';
import AddPost from '../add-post';
import Post from '../post';

export  default class News extends Component {
    render() {
        return (
            <div className='content-container'>
                <AddPost />
                <Post />
            </div>
        )
    }
}