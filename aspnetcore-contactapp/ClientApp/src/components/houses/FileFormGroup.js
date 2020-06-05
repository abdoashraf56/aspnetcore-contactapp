import React from 'react'

class FileFormGroup extends React.Component {

    render() {
        return (
            <div >
                <label for={this.props.title}>Choose Avatar <hr></hr></label>
                <input id={this.props.title} type="file"  name={this.props.title}></input>
            </div>
            
        )
    }
}

export default FileFormGroup