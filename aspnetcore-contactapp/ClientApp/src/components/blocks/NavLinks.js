import React from 'react'
import NavLink from '../houses/NavLink'
import { LoginMenu } from '../api-authorization/LoginMenu'

class NavLinks extends React.Component {
    render() {
        return (
            <ul class="nav-links">
               {
                   this.props.links.map((i , k) => {
                       return <NavLink text={i}/>
                   })
                   
               }
               <LoginMenu >
                </LoginMenu>
            </ul>
        )
    }
}

export default NavLinks