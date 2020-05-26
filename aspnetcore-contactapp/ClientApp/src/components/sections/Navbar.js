import React from 'react'
import Hamburger from '../../images/hamburger.svg'


class Navbar extends React.Component {
    render() {
        return (
            <div class="navigation">
                <div class="brand">Contact App</div>
                <img onclick="toggleMenu()" class="hmaburger" src={Hamburger} width="48" height="48" alt="" srcset="" />
                <ul class="nav-links">
                    <li class="nav-link active">About</li>
                    <li class="nav-link active">Pro version</li>
                    <li class="nav-link active">Sign up</li>
                    <li class="nav-link active">Sing in</li>
                </ul>
            </div>
        )
    }
}

export default Navbar