import React from 'react'

class NavLink extends React.Component {
     render() {
        return (
            <li className="nav-link active">{this.props.text}</li>
        )
    }
}

export default NavLink