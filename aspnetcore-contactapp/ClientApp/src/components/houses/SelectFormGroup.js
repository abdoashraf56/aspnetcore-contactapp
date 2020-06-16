import React from 'react'

class SelectFormGroup extends React.Component {
     render() {
        return (
            <div className="form-group">
                <label for={this.props.title}>{this.props.title}</label>
                <select className="form-control" id={this.props.title} name={this.props.title}>
                    {
                        this.props.options.map(({tagId , name},k) => {
                            return <option 
                            selected={this.props.value === tagId} 
                            value={name}>{name}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}

export default SelectFormGroup