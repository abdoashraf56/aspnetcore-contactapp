import React from 'react'

class TagIconDropdown extends React.Component {
     handle = (e)=>{
        var str = e.target.innerText
        if(str === "ALL"){
            this.props.handle(
                (a,v) => true , 
                str
            )
            return
        }
        this.props.handle(
            (a,v) => a.tag != null && a.tag.toLowerCase().includes(v.toLowerCase()) , 
            str
        )
     }
     render() {
        return (
            <div className="icon-holder dropdown">
            <button className={`icon icon-tag dropdown-toggle`} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <h6 className="dropdown-header">Tags</h6>
                
                {
                    this.props.tags.map((i,k) => {
                        return <a onClick={this.handle} className="dropdown-item" key={i.id}>{i.tag}</a>
                    })
                }
                <div className="dropdown-divider"></div>
                <a className="dropdown-item create-new-item" href="#">Create New</a>
            </div>
        </div>
        )
    }
}

export default TagIconDropdown