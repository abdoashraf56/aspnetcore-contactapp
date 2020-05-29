import React from 'react'
import SearchInput from '../houses/SearchInput'
import IconAction from '../houses/IconAction'
import TagIconDropdown from '../houses/TagIconDropdown'

class SearchFilterBar extends React.Component {
    render() {
        return (
            <div className="search-filter">
            <SearchInput handle={this.props.handle}/>

               <IconAction IconType="icon-plus"/>

                {/* <!-- Tag Icon --> */}
                <TagIconDropdown handle={this.props.handle}/>

                <IconAction IconType="icon-dots"/>
            </div>
        )
    }
}

export default SearchFilterBar