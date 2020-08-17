import React, {Component} from 'react';
import './add-post.scss';

export default class AddPost extends Component {
    render() {
        return (
            <div className='add-post'>
                <form action='' className='add-post__form'>
                        <textarea name='add-post__text'
                                  className='add-post__text'
                                  placeholder='Введите текст'></textarea>

                    <div className='add-post__btn-group'>
                        <input type='file'/>
                        <div className='controls-btn'>
                            <button className='add-post__cancel-btn'>Отмена</button>
                            <button className='add-post__add-btn'>Добавить</button>
                        </div>
                    </div>

                </form>
            </div>

        )
    }
}