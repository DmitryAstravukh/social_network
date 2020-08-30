import React from 'react';
import './search-bar.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({width, textColor, textSize}) => {
    const inputStyle = {
        color: textColor,
        fontSize: textSize
    }
    return (
        <div className='search-bar' style={{width: width}}>
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