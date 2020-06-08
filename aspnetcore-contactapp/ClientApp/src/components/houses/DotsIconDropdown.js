import React from 'react'

class DotsIconDropdown extends React.Component {
    deleteall = ()=>{
        this.props.deleteall()
     }
     render() {
        return (
            <div className="icon-holder dropdown">
            <button className="icon icon-dots dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <h6 className="dropdown-header">Options</h6>
                    <a onClick={this.deleteall} className="dropdown-item">Delete All</a>
            </div>
        </div>
        )
    }
}

export default DotsIconDropdown