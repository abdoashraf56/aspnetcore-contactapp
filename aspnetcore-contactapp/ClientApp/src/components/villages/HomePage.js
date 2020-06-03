import React from 'react'
import ContactList from '../sections/ContactList'
import Spinner from '../houses/Spinner'
import {getData} from '../../Controllers/HomePagController'
import ContactDetails from '../sections/ContactDetails'
import AddContact from '../sections/AddContact'
import CallToAction from '../blocks/CallToAction'
import Title from '../houses/Title'
import Subtitle from '../houses/Subtitle'

var empty = {
    firstName : "",
    lastName : "",
    phoneNumber : "",
    email : "",
    avatar : "",
    twitterAccount : "",
    facebookAccount : "",
    website : "",
    label : "",
    tag : ""
}

class HomePage extends React.Component {
    state = { 
        data: [] , 
        tempale : empty ,
        filterdata : [], 
        tags : [] , 
        loading: true  ,
        current : {},
        showInsert : false ,
        emptyDataShow : false
    }

    componentDidMount() {
        setTimeout(()=>{
            this.GetDataFromRepository()
        } , 1500)
    }

    /**
     * Fetch data from the repository
     * And Change the State 
     */
    GetDataFromRepository() {
        const {data , tags} = getData()
        this.setState((prevState) => {
            return { 
                data: data, 
                filterdata : data, 
                tags : tags,
                loading: false ,
                current : data[0]
            }
        })
    }

    /**
     * Change the current selected contact to selected one
     * @param {String} key id of the selected contact
     */
    changeCurrent =(key)=>{
        this.setState((prevState) => {
            var SelectedContact = prevState.data.filter(a => a.conatctID === key)[0]
            return { current: SelectedContact}
        })
    }


    /**
     * Filter the data depend of funcation and require key
     * @param {Function} func the filter function
     * @param {String} key the filter value
     */
    filterData = (func ,key) =>{
        this.setState((prevState) => {
            return { filterdata: prevState.data.filter(a => func(a , key))}
        })
    }

    /** 
     * Toggle the input page
    */
    ToogleInputPage = ()=>{
        this.setState((prevState) => {
            return { showInsert: !prevState.showInsert , tempale : empty}
        })
    }

    /**
     * Edit The current selected contact
    */
    EditContact = ()=>{
        this.setState((prevState) => {
            console.log(prevState.current)
            return { showInsert: !prevState.showInsert , tempale :prevState.current}
        })
    }
    
    /**
     * Delete The current selected contact
    */
    DeleteContact = ()=>{
        //Getting the current and index selected contact
        var current = this.state.current
        var index = this.state.data.indexOf(current) - 1

        //Delete the selectde contact by filter out the data 
        var newdata = this.state.data.filter(a => a !== current)
        
        //Update the current contact with replacement contact
        current = newdata[index > -1 ? index : 0]
        
        newdata = newdata.slice(0,2)

        if(current === undefined){
            this.setState((prevState) => {
                return {filterdata : newdata, data : newdata , emptyDataShow : true}
            })
            
        }

        this.setState((prevState) => {
            return {filterdata : newdata, data : newdata , current : current}
        })
    }

    render() {
        return (
            <section>

                {this.state.loading ? <div className="spin-container"><Spinner /></div>
                    : 
                    <div className="home-page">
                    <ContactList 
                        list={this.state.filterdata} 
                        handle = {this.filterData}
                        tags = {this.state.tags}
                        switchInptpage = {this.ToogleInputPage}
                        changeCurrent = {this.changeCurrent}
                    />
                    {
                        this.state.showInsert ? 
                        (
                            <AddContact tempale={this.state.tempale} options={this.state.tags}/>
                        ) : 
                        this.state.emptyDataShow ? 
                        (
                            <div className="details-page">
                                <Title title="No Contact To Show"/>
                                <Subtitle subtitle="No Contact To Show"/>
                                <button className="btn btn-primary" onClick={this.ToogleInputPage}>Add Contact</button>
                            </div>
                        ) :

                        (
                            <ContactDetails 
                                EditContact = {this.EditContact} 
                                current={this.state.current} 
                                DeleteContact = {this.DeleteContact}
                            />
                        )
                    }
                    </div>
                }


                {/* <!-- Details Page--> */}
                
                
            </section >
        )
    }
}

export default HomePage