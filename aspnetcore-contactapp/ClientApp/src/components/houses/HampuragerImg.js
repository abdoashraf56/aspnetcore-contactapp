import React from 'react'
import Hamburger from '../../images/hamburger.svg'

class HampurgerImg extends React.Component{
    render(){
        return (
            <img onclick="toggleMenu()" class="hmaburger" src={Hamburger} width="48" height="48" alt="" srcset="" />
        );
    }
}

export default HampurgerImg