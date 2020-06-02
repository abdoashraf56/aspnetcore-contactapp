import React from 'react'
import Hamburger from '../../images/hamburger.svg'
import {toggleNavLinks} from '../../Controllers/LandPageController'

class HampurgerImg extends React.Component{
     
    render(){
        return (
            <img onClick={toggleNavLinks} className="hmaburger" src={Hamburger} width="48" height="48" alt="" srcset="" />
        );
    }
}

export default HampurgerImg