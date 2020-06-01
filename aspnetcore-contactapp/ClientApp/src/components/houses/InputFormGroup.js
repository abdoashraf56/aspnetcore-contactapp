import React from 'react'

class InputFormGroup extends React.Component {
     render() {
        return (
            <div class="form-group">
                <label for={this.props.title}>{this.props.title.replace(/([a-z])([A-Z])/g, '$1 $2')}</label>
                <input type={this.props.type} name={this.props.title} class="form-control" id={this.props.title} aria-describedby={this.props.title} placeholder={`Enter ${this.props.title}`} />
            </div>
        )
    }
}

export default InputFormGroup