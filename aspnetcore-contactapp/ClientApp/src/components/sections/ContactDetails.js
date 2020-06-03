import React from 'react'
import female_avatar from '../../images/female_avatar.svg'
import avatar from '../../images/avatar-profile.svg'

class ContactDetails extends React.Component {
    EditContact = ()=>{
        console.log("foo")
        this.props.EditContact()
    }

    DeleteContact = () => {
        this.props.DeleteContact()
    }
    render() {
        const { current } = this.props
        const {firstName,
            lastName,
            phoneNumber,
            email,
            avatar,
            twitterAccount,
            facebookAccount,
            website,
            label,
            tag,} = current
        return (
            <div className="details-page">
                <div className="details-header">
                    {/* <!-- Option menu --> */}
                    <div className="tag  icon-hloder dropdown">
                        <button className="icon icon-dots dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <h6 className="dropdown-header">Options</h6>
                            <a  onClick={this.DeleteContact} className="dropdown-item" >Delete</a>
                            <a onClick={this.EditContact} className="dropdown-item" >Edit</a>
                            <a className="dropdown-item" >Share</a>
                        </div>
                    </div>

                    <div className="details-avatar">
                        <img className="card-avatar-img-details" src={`data:image/png;base64,${avatar}`} alt="avatr" srcset="" />
                    </div>
                    <div className="details-details">
                        <div className="card-title">{`${firstName} ${lastName}`}</div>
                        <div className="card-subtitle">{label}</div>
                    </div>
                    <div className="remain-details">
                        <div className="col-50 email">
                            <div className="icon-noaction icon-email"></div>
                            <a className="details-item" href={`mailto:${email}`}>{email}</a>
                        </div>
                        <div className="col-50">
                            <div className="icon-noaction icon-phone"></div>
                            <div className="details-item">{phoneNumber}</div>
                        </div>
                        <div className="col-50">
                            <div className="icon-noaction icon-twitter"></div>
        <a className="details-item" href={`https://twitter.com/${twitterAccount}`} target="_blank" rel="noopener noreferrer">@{twitterAccount}</a>
                        </div>
                        <div className="col-50">
                            <div className="icon-noaction icon-web"></div>
                            <a className="details-item" href={website} target="_blank" rel="noopener noreferrer">{website}</a>
                        </div>
                        <div className="col-50">
                            <div className="icon-noaction icon-facebook"></div>
                            <a className="details-item" href={`https://www.facebook.com/${facebookAccount}`} target="_blank" rel="noopener noreferrer">@{facebookAccount}</a>
                        </div>

                        <div className="col-50">
                            <div className="icon-noaction icon-tag"></div>
                            <div className="details-item upper">{tag}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactDetails