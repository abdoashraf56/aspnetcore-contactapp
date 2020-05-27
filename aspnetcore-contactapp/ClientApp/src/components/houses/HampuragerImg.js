import React from 'react'
import Hamburger from '../../images/hamburger.svg'
import $ from 'jquery'

class HampurgerImg extends React.Component{
    toggleNavLinks = ()=>{
        console.log("Hello")
        setTimeout(()=>{
            $(".nav-links").toggleClass("hide")
        } , 100)
    }
    render(){
        return (
            <img onClick={this.toggleNavLinks} className="hmaburger" src={Hamburger} width="48" height="48" alt="" srcset="" />
        );
    }
}

export default HampurgerImg