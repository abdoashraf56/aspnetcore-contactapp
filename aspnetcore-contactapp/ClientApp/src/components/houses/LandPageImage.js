import React from 'react'
import WelcomeImg from '../../images/landpage.svg'

class LandPageImage extends React.Component{
    render(){
        return (
            <img class="landpage-img" src={WelcomeImg} alt="" />
        );
    }
}

export default LandPageImage