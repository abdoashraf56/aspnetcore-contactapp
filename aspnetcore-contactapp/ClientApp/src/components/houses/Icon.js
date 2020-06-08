import React from 'react'

class Icon extends React.Component {
     render() {
        return (
            <span className={"icon " + this.props.IconType}></span>
        )
    }
}

export default Icon