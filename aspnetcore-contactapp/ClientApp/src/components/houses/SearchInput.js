import React from 'react'
import Icon from './Icon'

class SearchInput extends React.Component {
     handle = (e) => {
         const str = e.target.value
         this.props.handle(
             (a , v)=> a.firstName.includes(v) || a.firstName.includes(v)
                , 
            str 
            )
     }
     render() {
        return (
            <div className="search-input">
                <Icon IconType="icon-search"/>
                <input onChange={this.handle} className="search" placeholder="Search for contact..." type="search" name="search" id="search" />
            </div>
        )
    }
}

export default SearchInput