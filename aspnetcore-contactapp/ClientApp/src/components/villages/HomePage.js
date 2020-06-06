import React from 'react'
import ContactList from '../sections/ContactList'
import Spinner from '../houses/Spinner'
import { getData } from '../../Controllers/HomePagController'
import ContactDetails from '../sections/ContactDetails'
import AddContact from '../sections/AddContact'
import CallToAction from '../blocks/CallToAction'
import Title from '../houses/Title'
import Subtitle from '../houses/Subtitle'
import $ from 'jquery'

var empty = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    avatar: "",
    twitterAccount: "",
    facebookAccount: "",
    website: "",
    label: "",
    tag: ""
}

var orginalState = {
    data: [],
    tempale: empty,
    filterdata: [],
    tags: [],
    current: {},

}

var currentScroll = "A"

class HomePage extends React.Component {
    state = {
        ...orginalState, 
        loading: true,
        showInsert: false,
        emptyDataShow: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.GetDataFromRepository()
            $(".list").animate({
                scrollTop : "0" 
            }, 1500);
        }, 1500)
    }

    /**
     * Fetch data from the repository
     * And Change the State 
     */
    GetDataFromRepository() {
        const { data, tags } = getData()
        this.setState((prevState) => {
            return {
                data: data,
                filterdata: data,
                tags: tags,
                loading: false,
                current: data[0]
            }
        })
    }

    /** 
     * Toggle the input page
    */
    ToogleInputPage = () => {
        this.setState((prevState) => {
            return { showInsert: !prevState.showInsert, tempale: empty }
        })
    }


    /**
     * Add new Contact or Edit one
    * @param {Object} contact the new or updated contact
    */
    AddorEditContact = (contact) => {
        var updatedData = this.state.data
        //find the index of new contact if it exist
        var index = updatedData.findIndex(a => a.conatctID === contact.conatctID)
        if (index > -1) {
            //Replace the old with the new contact
            updatedData[index] = contact

            //Update

            this.setState((prevState) => {
                this.ToogleInputPage()
                return { filterdata: updatedData, data: updatedData, current: contact }
            })
        } else {
            //Create new one
            this.setState((prevState) => {
                updatedData.push(contact)
                
                this.ToogleInputPage()
                return { filterdata: updatedData, data: updatedData, current: contact }
            })
        }
    }

    /**
     * Change the current selected contact to selected one
     * @param {String} key id of the selected contact
     */
    changeCurrent = (key) => {
        this.setState((prevState) => {
            var SelectedContact = prevState.data.filter(a => a.conatctID === key)[0]
            return { current: SelectedContact }
        })
    }


    /**
     * Filter the data depend of funcation and require key
     * @param {Function} func the filter function
     * @param {String} key the filter value
     */
    filterData = (func, key) => {
        this.setState((prevState) => {
            return { filterdata: prevState.data.filter(a => func(a, key)) }
        })
    }


    /**
     * Edit The current selected contact
    */
    EditContact = () => {
        this.setState((prevState) => {
            return { showInsert: !prevState.showInsert, tempale: prevState.current }
        })
    }

    /**
     * Delete The current selected contact
    */
    DeleteContact = () => {
        //Getting the current and index selected contact
        var current = this.state.current
        var index = this.state.data.indexOf(current) - 1

        //Delete the selectde contact by filter out the data 
        var newdata = this.state.data.filter(a => a !== current)

        //Update the current contact with replacement contact
        current = newdata[index > -1 ? index : 0]


        if (current === undefined) {
            this.setState((prevState) => {
                return { filterdata: newdata, data: newdata, emptyDataShow: true }
            })

        }

        this.setState((prevState) => {
            return { filterdata: newdata, data: newdata, current: current }
        })
    }

    /**
     * Delete All contacts
     */
    DeleteAll = () => {
        this.setState((prevState) => {
            return orginalState
        })
    }

    /**
     * Scroll to spacific contacy in the contacts list
     * @param {String} str target section
     */
   
    scrollTo = (str)=>{
        var a = $(`#A`)
        var target = $(`#${str}`)
        
        if(target.length){
            try{
                var t_a = target.offset().top - a.offset().top
                console.log(t_a)
                $(".list").animate({
                    scrollTop : t_a
                }, 1500);
            }catch(E){
                console.log(E)
            }
        }
    }

    render() {
        return (
            <section>

                {this.state.loading ? <div className="spin-container"><Spinner /></div>
                    :
                    <div className="home-page">
                        <ContactList
                            scrollTo={this.scrollTo}
                            deleteall={this.DeleteAll}
                            list={this.state.filterdata}
                            handle={this.filterData}
                            tags={this.state.tags}
                            switchInptpage={this.ToogleInputPage}
                            changeCurrent={this.changeCurrent}
                        />
                        {
                            this.state.showInsert ?
                                (
                                    <AddContact
                                        switchInptpage={this.ToogleInputPage}
                                        tempale={this.state.tempale}
                                        options={this.state.tags}
                                        AddorEditContact={this.AddorEditContact}
                                    />
                                ) :
                                this.state.emptyDataShow ?
                                    (
                                        <div className="details-page">
                                            <Title title="No Contact To Show" />
                                            <Subtitle subtitle="No Contact To Show" />
                                            <button className="btn btn-primary" onClick={this.ToogleInputPage}>Add Contact</button>
                                        </div>
                                    ) :

                                    (
                                        <ContactDetails
                                            EditContact={this.EditContact}
                                            current={this.state.current}
                                            DeleteContact={this.DeleteContact}
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