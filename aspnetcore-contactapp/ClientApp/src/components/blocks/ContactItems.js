import React from 'react'
import ContactCard from '../houses/ContactCard'


class ContactItems extends React.Component {
     render() {
        var l = []
        var {items} = this.props
        items = items.sort((a,b) => a.firstName > b.firstName)
        return (
            <div id="list" className="list" >
            {items.map((i , k) => {
                return (
                    <div>
                    {
                        l.indexOf(i.firstName.charAt(0)) < 0 ?
                        <div id={i.firstName.charAt(0)}>{l.push(i.firstName.charAt(0)) > 0 ? i.firstName.charAt(0) : ""}
                        <ContactCard 
                        name = {`${i.firstName} ${i.lastName}`}
                        label = {i.label}
                        avatar = {i.avatar}
                        key={i.conatctID}
                        conatctID ={i.conatctID}
                        changeCurrent = {this.props.changeCurrent}
                   />
                        </div>
                        :
                        <ContactCard 
                        name = {`${i.firstName} ${i.lastName}`}
                        label = {i.label}
                        avatar = {i.avatar}
                        key={i.conatctID}
                        conatctID ={i.conatctID}
                        changeCurrent = {this.props.changeCurrent}
                    />
                    }
                    
                    </div>
                )
            })}
                
            </div>
        )
    }
}

export default ContactItems