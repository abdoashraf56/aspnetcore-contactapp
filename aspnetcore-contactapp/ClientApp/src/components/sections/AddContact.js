import React from 'react'
import InputFormGroup from '../houses/InputFormGroup'
import SelectFormGroup from '../houses/SelectFormGroup'
import FileFormGroup from '../houses/FileFormGroup'
import SwitchIconAction from '../houses/SwitchIconAction'

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
                        Object.keys(tempale).map((key, i) => {

                            //Convert the key to match the model on backend server
                            
                            if (key === "email") {
                                return <InputFormGroup value={this.props.tempale[key]} title={key} type={"email"} />
                            }

                            if (key === "tagID") {
                                return <div></div>
                            }

                            if(key === "conatctID"){
                                return <input name="conatctID" type="hidden" value={this.props.tempale[key]}></input>
                            }

                            if (key === "phone") {
                                return <InputFormGroup value={this.props.tempale[key]} title={key} type={"tel"} />
                            }

                            if (key === "tag") {
                                return <SelectFormGroup value={this.props.tempale[key]} title={key} options={this.props.options} />
                            }

                            if (key === "avatar") {
                                return <FileFormGroup title={"avatar"} />
                            }

                            return <InputFormGroup value={this.props.tempale[key]} title={key} type={"text"} />
                        })
                    }

                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default AddContact
