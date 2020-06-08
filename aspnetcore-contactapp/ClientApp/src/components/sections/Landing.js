import React from 'react'
import CallToAction from '../blocks/CallToAction';
import LandPageImage from '../houses/LandPageImage';


class Landing extends React.Component {
    render() {
        return (
            <section class="land-page">
                <CallToAction 
                    title= {this.props.title} 
                    subtitle =  {this.props.subtitle}
                    action =  {this.props.action}
                />
                <LandPageImage />
            </section>
        );
    }
}

export default Landing 