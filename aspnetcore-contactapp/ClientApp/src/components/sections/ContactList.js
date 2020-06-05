import React from 'react'
import SearchFilterBar from '../blocks/SearchFilterBar'
import ContactItems from '../blocks/ContactItems'
import AlpahList from '../blocks/AlphaList'

class ContactList extends React.Component {

    render() {
        return (
            <div className="contact-list">
               <SearchFilterBar 
                handle={this.props.handle} 
                deleteall = {this.props.deleteall}
                tags={this.props.tags}
                switchInptpage = {this.props.switchInptpage}
                />
                <div className="filter-list">
                    <ContactItems 
                        items={this.props.list}
                        changeCurrent = {this.props.changeCurrent}
                        />

                    <AlpahList scrollTo={this.props.scrollTo}/>
                </div>
            </div>
        )
    }
}

export default ContactList