import React from 'react'
import Brand from '../houses/Brand'
import HampurgerImg from '../houses/HampuragerImg'
import NavLinks from '../blocks/NavLinks'


class Navbar extends React.Component {
    render() {
        return (
            <div class="navigation">
                <Brand />
                <HampurgerImg />
                
                <NavLinks links={this.props.links}/>
            </div>
        )
    }
}

export default Navbar