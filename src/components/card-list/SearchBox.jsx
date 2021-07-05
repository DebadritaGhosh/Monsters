import React from 'react'
import '../css/SearchBox.css';

export const SearchBox = ({ placeholder, handleChanger }) => {
    return (
        <div className="searchBox-container">
            <input className="searchBox" type="search" placeholder={placeholder}
                onChange={handleChanger} // ,() =>console.log(this.state.searchField)
            />
        </div>
    )
}