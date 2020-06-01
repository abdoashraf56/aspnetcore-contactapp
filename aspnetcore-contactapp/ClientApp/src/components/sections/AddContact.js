import React from 'react'
import InputFormGroup from '../houses/InputFormGroup'
import SelectFormGroup from '../houses/SelectFormGroup'
import FileFormGroup from '../houses/FileFormGroup'

class AddContact extends React.Component {
    render() {
        return (
            <div class="input-page">
                <form action="#" method="GET" enctype="multipart/form-data">


                    {
                        Object.keys(this.props.tempale).map((k, i) => {
                            if (k === "email") {
                                return <InputFormGroup title={k} type={"email"} />
                            }

                            if( k == "conatctID" || k == "tagID") {
                                return <div></div>
                            }

                            if (k === "phone") {
                                return <InputFormGroup title={k} type={"tel"} />
                            }

                            if (k === "tag") {
                                return <SelectFormGroup title={k} options={this.props.options} />
                            }
                           
                            if (k === "avatar") {
                                return <FileFormGroup title={k} />
                            }

                            return <InputFormGroup title={k} type={"text"} />
                        })
                    }

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddContact
