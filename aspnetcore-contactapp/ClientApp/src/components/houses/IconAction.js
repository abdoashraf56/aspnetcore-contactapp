import React from 'react'
import Icon from './Icon'

class IconAction extends React.Component {
    switch = ()=>{
        this.props.switchInptpage()
    }
     render() {
        return (
            <div onClick={this.switch} className="icon-holder">
                <Icon IconType={this.props.IconType}/>
            </div>
        )
    }
}

export default IconAction