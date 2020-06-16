import React from 'react'
import InputFormGroup from '../houses/InputFormGroup'
import SelectFormGroup from '../houses/SelectFormGroup'
import FileFormGroup from '../houses/FileFormGroup'
import $ from 'jquery'
import {ReadImage} from '../../Controllers/HomePagController'
import Icon from '../houses/Icon'
import SwitchIconAction from '../houses/SwitchIconAction'

var EmptyContact = {
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    Email: "",
    Avatar: "",
    TwitterAccount: "",
    FacebookAccount: "",
    Website: "",
    Label: "",
    Tag: ""
}

class AddContact extends React.Component {


    AddorEditContact = async (e) => {
        e.preventDefault()
        this.props.AddorEditContact()
    }


    render() {
        const {tempale} = this.props
        return (
            <div class="input-page">
                <SwitchIconAction 
                    IconType="icon-close" 
                    switchInptpage = {this.props.switchInptpage}
                />
                <form id="form" onSubmit={this.AddorEditContact} action="api/contact" method="POST" enctype="multipart/form-data">


                    {
                        Object.keys(tempale).map((k, i) => {

                            //Convert the key to match the model on backend server
                            var key = k[0].toUpperCase() +  k.slice(1)
                            if (key === "Email") {
                                return <InputFormGroup value={this.props.tempale[k]} title={key} type={"email"} />
                            }

                            if (key == "TagID") {
                                return <div></div>
                            }

                            if(key == "ConatctID"){
                                return <input name="ConatctID" type="hidden" value={this.props.tempale[k]}></input>
                            }

                            if (key === "Phone") {
                                return <InputFormGroup value={this.props.tempale[k]} title={key} type={"tel"} />
                            }

                            if (key == "Tag") {
                                return <SelectFormGroup value={this.props.tempale[k]} title={key} options={this.props.options} />
                            }

                            if (key === "Avatar") {
                                return <FileFormGroup title={"Avatar"} />
                            }

                            return <InputFormGroup value={this.props.tempale[k]} title={key} type={"text"} />
                        })
                    }

                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default AddContact
