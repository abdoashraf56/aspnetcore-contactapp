import React from 'react'
import female_avatar from '../../images/female_avatar.svg'

class DetailsAvatar extends React.Component {
     render() {
        return (
            <div className="details-avatar">
                <img className="card-avatar-img" src={female_avatar} alt="avatr" srcset="" />
            </div>
        )
    }
}

export default DetailsAvatar