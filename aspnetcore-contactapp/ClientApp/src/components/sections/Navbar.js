import React from 'react'
import Brand from '../houses/Brand'
import HampurgerImg from '../houses/HampuragerImg'
import NavLinks from '../blocks/NavLinks'



class Navbar extends React.Component {
    state = {links : this.props.links}
   
    render() {
        return (
            <div class="navigation">
                <Brand />
                <HampurgerImg />
                <NavLinks links={this.state.links}/>
            </div>
        )
    }
}

export default Navbar