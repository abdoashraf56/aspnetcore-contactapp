import React from 'react'
import female_avatar from '../../images/female_avatar.svg'
import avatar from '../../images/avatar-profile.svg'
import ContactList from '../sections/ContactList'
import Spinner from '../houses/Spinner'
import { GetData } from '../../Repository/Repository'


class HomePage extends React.Component {
    state = { data: {} , filterdata : {}, loading: true }

    componentDidMount() {
        setTimeout(()=>{
            this.getData()
        } , 1500)
    }

    getData() {
        const data = GetData()
        this.setState((prevState) => {
            console.log(data)
            return { data: data, filterdata : data , loading: false }
        })
    }


    filterData = (func ,v) =>{
        this.setState((prevState) => {
            return { filterdata: prevState.data.filter(a => func(a , v))}
        })
    }

    render() {
        return (
            <section className="home-page">

                {this.state.loading ? <div className="spin-container"><Spinner /></div>
                    : <ContactList 
                        list={this.state.filterdata} 
                        handle = {this.filterData}
                    />
                }


                {/* <!-- Details Page--> */}
                <div className="details-page">
                    <div className="details-header">
                        {/* <!-- Option menu --> */}
                        <div className="tag  icon-hloder dropdown">
                            <button className="icon icon-dots dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <h6 className="dropdown-header">Options</h6>
                                <a className="dropdown-item" href="#">Delete</a>
                                <a className="dropdown-item" href="#">Edit</a>
                                <a className="dropdown-item" href="#">Share</a>
                            </div>
                        </div>

                        <div className="details-avatar">
                            <img className="card-avatar-img" src={female_avatar} alt="avatr" srcset="" />
                        </div>
                        <div className="details-details">
                            <div className="card-title">Abdo Ashraf</div>
                            <div className="card-subtitle">Accountant at company</div>
                        </div>
                        <div className="remain-details">
                            <div className="col-50 email">
                                <div className="icon-noaction icon-email"></div>
                                <a className="details-item" href="mailto:abdo.ashraf975@gmail.com">abdo.ashraf975@gmail.com</a>
                            </div>
                            <div className="col-50">
                                <div className="icon-noaction icon-phone"></div>
                                <div className="details-item">01003548169</div>
                            </div>
                            <div className="col-50">
                                <div className="icon-noaction icon-twitter"></div>
                                <a className="details-item" href="https://twitter.com/nbarbettini" target="_blank" rel="noopener noreferrer">@nbarbettini</a>
                            </div>
                            <div className="col-50">
                                <div className="icon-noaction icon-web"></div>
                                <a className="details-item" href="https://trello.com" target="_blank" rel="noopener noreferrer">https://trello.com</a>
                            </div>
                            <div className="col-50">
                                <div className="icon-noaction icon-facebook"></div>
                                <a className="details-item" href="https://www.facebook.com/nbarbettini" target="_blank" rel="noopener noreferrer">@nbarbettini</a>
                            </div>

                            <div className="col-50">
                                <div className="icon-noaction icon-tag"></div>
                                <div className="details-item upper">Family</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default HomePage