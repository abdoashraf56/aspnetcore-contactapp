import React from 'react'
import Icon from './Icon'

class SearchInput extends React.Component {
     render() {
        return (
            <div className="search-input">
                <Icon IconType="icon-search"/>
                <input className="search" placeholder="Search for contact..." type="search" name="search" id="search" />
            </div>
        )
    }
}

export default SearchInput