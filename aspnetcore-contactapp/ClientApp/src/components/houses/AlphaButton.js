import React from 'react'

class AlphaButton extends React.Component {
    clicked = (e)=>{
        this.props.scrollTo(e.target.innerText)
    }
     render() {
        return (
            <button onClick={this.clicked} className="alpha-btn">{this.props.text}</button>
        )
    }
}

export default AlphaButton