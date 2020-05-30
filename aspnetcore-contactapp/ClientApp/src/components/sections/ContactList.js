import React from 'react'
import SearchFilterBar from '../blocks/SearchFilterBar'
import ContactItems from '../blocks/ContactItems'

class ContactList extends React.Component {

    render() {
        return (
            <div className="contact-list">
               <SearchFilterBar 
                handle={this.props.handle} 
                tags={this.props.tags}
                switchInptpage = {this.props.switchInptpage}
                />

                <ContactItems 
                    items={this.props.list}
                    changeCurrent = {this.props.changeCurrent}
                />
            </div>
        )
    }
}

export default ContactList