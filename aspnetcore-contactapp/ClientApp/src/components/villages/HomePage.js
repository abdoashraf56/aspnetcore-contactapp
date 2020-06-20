import React from 'react'
import ContactList from '../sections/ContactList'
import Spinner from '../houses/Spinner'
import { getData , ReadImage } from '../../Controllers/HomePagController'
import ContactDetails from '../sections/ContactDetails'
import AddContact from '../sections/AddContact'

import Title from '../houses/Title'
import Subtitle from '../houses/Subtitle'
import $ from 'jquery'


//this is the temple object of json reponse
var empty = {
    conatctID: "88a6c7cf-55d9-416e-97b6-b48b88dbe5a3",
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


class HomePage extends React.Component {
    state = {
        ...orginalState,
        loading: true,
        showInsert: false,
        emptyDataShow: false
    }

    componentDidMount() {
        setTimeout(async () => {
            await this.GetDataFromRepository()
            $(".list").animate({
                scrollTop: "0"
            }, 1500);
        }, 1500)
    }

    /**
     * Fetch data from the repository
     * And Change the State 
     */
    async GetDataFromRepository() {
        const { data, tags } = await getData()
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
     * Toggle the input page and chnage current selected
     * @param {List} updatedData it is update version of data
     * @param {Object} contact it is what will replace current selected
    */
    ToogleInputPageAndChangCurrent = (updatedData , contact) => {
        this.setState((prevState) => {
            var state = { filterdata: updatedData, data: updatedData, current: contact , showInsert: !prevState.showInsert, tempale: empty }
                        if (prevState.emptyDataShow) state.emptyDataShow = false
                        return state
        })
    }


    /**
     * Add new Contact or Edit one
    * 
    */
    AddorEditContact = async () => {
        //Get from and convert it to FormData
        var form = document.getElementById("form")

        var formData = new FormData(form)

        //Convert formData to json to send it
        var requestBody = {
        }
        for (var [key, value] of formData.entries()) {
            requestBody[key] = value
        }

        //Check if their is avatar image upload 
        if (requestBody.avatar !== "") {
            //Read the avatar image file and get byte[] of it
            var data  = await ReadImage(requestBody.avatar)
            requestBody.avatar = data.split("base64,")[1]
        }else{
            /*
            * Check if is not a new contact by compare the conatctID with the default one
            * and not update its avatar 
            * so keep the current avatar the same
            */
            if(requestBody.conatctID !== "88a6c7cf-55d9-416e-97b6-b48b88dbe5a3"){
                requestBody.avatar = this.state.current.avatar
            }
        }
        //Send Post Request
        fetch("https://localhost:5001/api/contact", {
            method: "POST",
            // mode: "cors",
            headers: {
                "Content-Type" : "application/json; charset=utf-8",
                // "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(requestBody)
        }).then(response =>{
            return  response.json()
        }).then(contact => {
            if (contact != null) {
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
                    //Push the new contact to the data
                    updatedData.push(contact)
                    this.ToogleInputPageAndChangCurrent(updatedData , contact)
                }
            }
        }).catch(e => {
            console.log(e)
        })

    }

    /**
     * Change the current selected contact to selected one
     * @param {String} key id of the selected contact
     */
    changeCurrent = (key) => {
        this.setState((prevState) => {
            //Filter data by conatctID to match key
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
        fetch('api/contact/' + current.conatctID, {
            method: 'DELETE',
        }).then(res => {

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
        })
    }

    /**
     * Delete All contacts
     */
    DeleteAll = () => {
        this.setState((prevState) => {
            var orginial = { ...orginalState, emptyDataShow: true }
            orginial.tags = prevState.tags
            return orginial
        })
    }

    /**
     * Scroll to spacific contacy in the contacts list
     * @param {String} str target section
     */
    scrollTo = (str) => {
        var a = $(`#list-head`)
        var target = $(`#${str}`)

        if (target.length) {
            try {
                //Callculate the distance between the target and the head of list
                var t_a = target.offset().top - a.offset().top
                $(".list").animate({
                    scrollTop: t_a
                }, 1500);
            } catch (E) {
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
            </section >
        )
    }
}

export default HomePage

