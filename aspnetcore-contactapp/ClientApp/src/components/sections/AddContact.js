import React from 'react'
import InputFormGroup from '../houses/InputFormGroup'
import SelectFormGroup from '../houses/SelectFormGroup'
import FileFormGroup from '../houses/FileFormGroup'
import $ from 'jquery'
import {ReadImage} from '../../Controllers/HomePagController'

var EmptyContact = {
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

class AddContact extends React.Component {


    AddorEditContact = async (e) => {
        e.preventDefault()
        var x = { ...EmptyContact }
        Object.keys(EmptyContact).forEach(async (k) => {
            var target = $(`#${k}`)
            if (target != null) {
                if (k == "avatar") {
                    var file = target.prop("files")[0]
                    //Make read image Async by use promise
                    if(file){
                        var data  = await ReadImage(file)
                        x[k] = data.split("base64,")[1]
                    }else{
                        //Put the exist avatar
                        x[k] = this.props.tempale.avatar
                    }
                } else {
                    x[k] = target.val()
                }
            }
        })
        x.conatctID = this.props.tempale.conatctID ? this.props.tempale.conatctID : 25
        console.log(x)
        setTimeout(()=>{
            this.props.AddorEditContact(x)
        } , 200)
        
    }


    render() {
        return (
            <div class="input-page">
                <form onSubmit={this.AddorEditContact} action="#" method="POST" enctype="multipart/form-data">


                    {
                        Object.keys(this.props.tempale).map((k, i) => {
                            if (k === "email") {
                                return <InputFormGroup value={this.props.tempale[k]} title={k} type={"email"} />
                            }

                            if (k == "conatctID" || k == "tagID") {
                                return <div></div>
                            }

                            if (k === "phone") {
                                return <InputFormGroup value={this.props.tempale[k]} title={k} type={"tel"} />
                            }

                            if (k === "tag") {
                                return <SelectFormGroup value={this.props.tempale[k]} title={k} options={this.props.options} />
                            }

                            if (k === "avatar") {
                                return <FileFormGroup title={k} />
                            }

                            return <InputFormGroup value={this.props.tempale[k]} title={k} type={"text"} />
                        })
                    }

                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default AddContact
