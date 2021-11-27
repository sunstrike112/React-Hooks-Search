import React, { useState } from 'react';

import SearchInput from './components/SearchInput'
import ResultTable from './components/ResultTable'
import NotificationBar  from './components/NotificationBar'
import './SearchPage.css'

const axios = require('axios')

function SearchPage(props) {

    const urlAPI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    const [isSearching, setIsSearching] = useState(false)
    const [listDrinks, setListDrinks] = useState([])
    const [isFirstSearch, setIsFirstSearch] = useState(true)

    const getDrinks = (inputSearch) => {
        return new Promise((resolve) => {
            axios.get(`${urlAPI}${inputSearch}`)
                .then(response => {
                    resolve(response.data.drinks)
                    setIsSearching(false)
                })
                .catch(() => {
                    alert(`Request to API failed, Please try again !!!`)
                })
            })
    }
    
    const handleGetDrinks = async(inputSearch) => {
        setIsFirstSearch(false)
        setIsSearching(true)
        setListDrinks(await getDrinks(inputSearch))
        getDrinks(inputSearch)
    }
    
    return (
        <div className='search-page'>
            <SearchInput handleSearch={handleGetDrinks}/>
            <NotificationBar    
                isSearching={isSearching} 
                isFirstSearch={isFirstSearch} 
                listDrinks={listDrinks}/>
            <ResultTable 
                isSearching={isSearching}
                isFirstSearch={isFirstSearch}
                listDrinks={listDrinks}/>              
        </div>
    );
}

export default SearchPage;