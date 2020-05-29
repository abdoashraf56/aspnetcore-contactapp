import React from 'react'
import SearchFilterBar from '../blocks/SearchFilterBar'
import ContactItems from '../blocks/ContactItems'

class ContactList extends React.Component {

    render() {
        return (
            <div className="contact-list">
               <SearchFilterBar />

                <ContactItems items={this.props.list}/>
            </div>
        )
    }
}

export default ContactList