import React from 'react'
import male_avatar from '../../images/male_avatar.svg'

class ContactCard extends React.Component {
    render() {
        return (
            <div className="m-card">
                <div className="card-avatar">
                    <img className="card-avatar-img" src={this.props.avatar || male_avatar} alt="avatar" srcset="" />
                </div>
                <div className="card-details">
                    <div className="card-title">{this.props.name}</div>
                    <div className="card-subtitle">{this.props.lable}</div>
                </div>
            </div>
        )
    }
}

export default ContactCard