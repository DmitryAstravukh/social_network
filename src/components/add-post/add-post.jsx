import React from 'react';
import './add-post.scss';

const AddPost = ({text, editNewPostText, addNewPost}) => {

    return (
        <div className='add-post'>
            <form action='' className='add-post__form'>
                <textarea name='add-post__text'
                          className='add-post__text'
                          placeholder='Введите текст'
                          value={text}
                          onChange={(e) => editNewPostText(e.target.value)}></textarea>

                <div className='add-post__btn-group'>
                    <input type='file'/>
                    <div className='controls-btn'>
                        <button className='add-post__cancel-btn'
                                type='button'>Отмена</button>

                        <button className='add-post__add-btn'
                                type='button'
                                onClick={addNewPost}>Добавить</button>
                    </div>
                </div>

            </form>
        </div>

    )
}

export default AddPost;