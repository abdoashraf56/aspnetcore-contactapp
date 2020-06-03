import React from 'react'
import InputFormGroup from '../houses/InputFormGroup'
import SelectFormGroup from '../houses/SelectFormGroup'
import FileFormGroup from '../houses/FileFormGroup'

class AddContact extends React.Component {
    render() {
        return (
            <div class="input-page">
                <form action="#" method="POST" enctype="multipart/form-data">


                    {
                        Object.keys(this.props.tempale).map((k, i) => {
                            if (k === "email") {
                                return <InputFormGroup value={this.props.tempale[k]} title={k} type={"email"} />
                            }

                            if( k == "conatctID" || k == "tagID") {
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
