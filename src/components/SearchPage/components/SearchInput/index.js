import React, {useState} from 'react';

import './SearchInput.css'

function SearchInput(props) {
    const [inputSearch, setInputSearch] = useState('')

    const getSearchInput = (inputSearch) => {
        setInputSearch(inputSearch.target.value)
    }

    const handleSearchClick = () => {
        props.handleSearch(inputSearch)
    }

    return (
        <div className="search">
            <input placeholder="Enter to search" onChange={getSearchInput}/>
            <button onClick={handleSearchClick}>Search</button>
        </div>
    );
}

export default SearchInput;