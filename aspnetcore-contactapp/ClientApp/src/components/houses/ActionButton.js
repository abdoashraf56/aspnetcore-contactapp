import React from 'react'
import { Link } from 'react-router-dom';


class ActionButton extends React.Component {
    render() {
        return (
            <Link to={this.props.action.path}>
                <button style={{textTransform:"uppercase"}} className="action">
                    {this.props.action.text}
                </button>
            </Link>
        );
    }
}

export default ActionButton 