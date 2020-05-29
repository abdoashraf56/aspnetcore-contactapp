import React from 'react'

class TagIconDropdown extends React.Component {
     render() {
        return (
            <div className="icon-holder dropdown">
            <button className={`icon icon-tag dropdown-toggle`} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <h6 className="dropdown-header">Tags</h6>
                <a className="dropdown-item" href="#">Family</a>
                <a className="dropdown-item" href="#">Co-worker</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item create-new-item" href="#">Create New</a>
            </div>
        </div>
        )
    }
}

export default TagIconDropdown