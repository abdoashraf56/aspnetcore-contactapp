import React from 'react'
import ContactCard from '../houses/ContactCard'


class ContactItems extends React.Component {
     render() {
        return (
            <div className="list">
            {this.props.items.map((i , k) => {
                return (
                   <ContactCard 
                        name = {`${i.firstName} ${i.lastName}`}
                        lable = {i.lable || "Accountants"}
                        avatar = {i.avatar}
                   />
                )
            })}
                
            </div>
        )
    }
}

export default ContactItems