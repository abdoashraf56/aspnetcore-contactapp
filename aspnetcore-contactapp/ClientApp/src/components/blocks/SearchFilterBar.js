import React from 'react'
import SearchInput from '../houses/SearchInput'

import TagIconDropdown from '../houses/TagIconDropdown'
import IconAction from '../houses/IconAction'

class SearchFilterBar extends React.Component {
    render() {
        return (
            <div className="search-filter">
            <SearchInput handle={this.props.handle}/>

               <IconAction 
                    IconType="icon-plus" 
                    switchInptpage = {this.props.switchInptpage}
                />

                {/* <!-- Tag Icon --> */}
                <TagIconDropdown handle={this.props.handle}  tags={this.props.tags}/>

                <IconAction IconType="icon-dots" switchInptpage={()=>{}}/>
            </div>
        )
    }
}

export default SearchFilterBar