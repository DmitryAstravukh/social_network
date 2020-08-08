import React from 'react';
import './search-bar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <FontAwesomeIcon icon={faSearch} />
      <input type='search' placeholder='Найти пост'/>
    </div>
  )
}

export default SearchBar;