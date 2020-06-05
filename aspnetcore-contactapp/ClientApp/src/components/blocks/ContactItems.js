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
                        label = {i.label}
                        avatar = {i.avatar}
                        key={i.conatctID}
                        conatctID ={i.conatctID}
                        changeCurrent = {this.props.changeCurrent}
                   />
                )
            })}
                
            </div>
        )
    }
}

export default ContactItems