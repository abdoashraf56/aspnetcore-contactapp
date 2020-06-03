import React from 'react'

class SelectFormGroup extends React.Component {
     render() {
        return (
            <div className="form-group">
                <label for={this.props.title}>{this.props.title}</label>
                <select className="form-control" id={this.props.title} name={this.props.title}>
                    {
                        this.props.options.map(({id , tag},k) => {
                            return <option 
                            selected={this.props.value === tag} 
                            value={tag}>{tag}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}

export default SelectFormGroup