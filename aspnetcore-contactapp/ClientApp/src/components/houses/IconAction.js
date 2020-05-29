import React from 'react'
import Icon from './Icon'

class IconAction extends React.Component {
     render() {
        return (
            <div className="icon-holder">
                <Icon IconType={this.props.IconType}/>
            </div>
        )
    }
}

export default IconAction