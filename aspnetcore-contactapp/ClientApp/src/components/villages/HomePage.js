import React from 'react'
import ContactList from '../sections/ContactList'
import Spinner from '../houses/Spinner'
import {getData} from '../../Controllers/HomePagController'
import ContactDetails from '../sections/ContactDetails'
import AddContact from '../sections/AddContact'


class HomePage extends React.Component {
    state = { 
        data: {} , 
        filterdata : {}, 
        tags : {} , 
        loading: true  ,
        current : {},
        showInsert : false
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
            return { showInsert: !prevState.showInsert}
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
                            <AddContact tempale={this.state.data[0]} options={this.state.tags}/>
                        ) : 
                        (
                            <ContactDetails current={this.state.current} />
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