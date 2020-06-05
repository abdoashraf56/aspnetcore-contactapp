import React from 'react'
import SearchInput from '../houses/SearchInput'

import TagIconDropdown from '../houses/TagIconDropdown'
import SwitchIconAction from '../houses/SwitchIconAction'
import DotsIconDropdown from '../houses/DotsIconDropdown'

class SearchFilterBar extends React.Component {
    render() {
        return (
            <div className="search-filter">
            <SearchInput handle={this.props.handle}/>

               <SwitchIconAction 
                    IconType="icon-plus" 
                    switchInptpage = {this.props.switchInptpage}
                />

                {/* <!-- Tag Icon --> */}
                <TagIconDropdown handle={this.props.handle}  tags={this.props.tags}/>

                <DotsIconDropdown deleteall={this.props.deleteall}/>
            </div>
        )
    }
}

export default SearchFilterBar