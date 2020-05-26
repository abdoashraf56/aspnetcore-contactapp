import React from 'react'
import Title from '../houses/Title';
import Subtitle from '../houses/Subtitle';
import ActionButton from '../houses/ActionButton';


class CallToAction extends React.Component {
    render() {
        return (
            <div class="calltoaction">
                <Title title= {this.props.title}/>
                <Subtitle subtitle =  {this.props.subtitle}/>
                <ActionButton action =  {this.props.action}/>
            </div>
        );
    }
}

export default CallToAction 