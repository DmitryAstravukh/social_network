import React, { Component } from 'react';
import AddPost from '../components/add-post';

import { connect } from 'react-redux';
import { editNewPostText, addNewPost } from '../actions/news';

class AddPostContainer extends Component {

    render() {
        const { text, editNewPostText, addNewPost } = this.props;

        return <AddPost text={text}
                        editNewPostText={editNewPostText}
                        addNewPost={addNewPost}/>

    }
}

const mapStateToProps = ({newsReducer: { newPost:{ text } }}) => {
    return { text }
}

const mapDispatchToProps =  {
    editNewPostText,
    addNewPost
}


export default connect(mapStateToProps, mapDispatchToProps)(AddPostContainer);
