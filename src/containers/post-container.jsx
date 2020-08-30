import React, { Component } from 'react';
import Post from '../components/post';

import { connect } from 'react-redux';

class PostContainer extends Component {
    render() {
        console.log(this.props.posts);
        return (
            this.props.posts.map((props) => {
               return <Post key={props.id} {...props}/>
            })
        )
    }
}

const mapStateToProps = ({newsReducer: { posts }}) => {
    return { posts }
}

// const mapDispatchToProps = { getAllPosts }

export default connect(mapStateToProps, null)(PostContainer);
