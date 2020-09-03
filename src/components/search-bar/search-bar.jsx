import React from 'react';
import './search-bar.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({width, height, textColor, textSize}) => {
    const inputStyle = {
        color: textColor,
        fontSize: textSize
    }

    const searchBarStyle = {
        width,
        height
    }

    return (
        <div className='search-bar' style={searchBarStyle}>
            <FontAwesomeIcon icon={faSearch} color={textColor}/>
            <form action='' style={{width: width}}>
                <input type='search'
                       placeholder='Найти'
                       style={inputStyle}/>
            </form>

        </div>
    )
}

export default SearchBar;