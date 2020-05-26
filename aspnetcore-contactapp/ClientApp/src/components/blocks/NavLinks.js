import React from 'react'
import NavLink from '../houses/NavLink'

class NavLinks extends React.Component {
    render() {
        return (
            <ul class="nav-links">
               {
                   this.props.links.map((i , k) => {
                       return <NavLink text={i}/>
                   })
               }
            </ul>
        )
    }
}

export default NavLinks