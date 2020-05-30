import React from 'react'
import ContactList from '../sections/ContactList'
import Spinner from '../houses/Spinner'
import { GetContactData ,  GetTagData} from '../../Repository/Repository'
import ContactDetails from '../sections/ContactDetails'


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
            this.getData()
        } , 1500)
    }

    getData() {
        const data = GetContactData()
        const tags = GetTagData()
        this.setState((prevState) => {
            console.log(data)
            return { 
                data: data, 
                filterdata : data, 
                tags : tags,
                loading: false ,
                current : data[0]
            }
        })
    }

    changeCurrent =(key)=>{
        this.setState((prevState) => {
            var SelectedContact = prevState.data.filter(a => a.conatctID === key)[0]
            return { current: SelectedContact}
        })
    }


    filterData = (func ,v) =>{
        this.setState((prevState) => {
            return { filterdata: prevState.data.filter(a => func(a , v))}
        })
    }

    showInputPage = ()=>{
        this.setState((prevState) => {
            return { showInsert: !prevState.showInsert}
        })
    }

    render() {
        return (
            <section className="home-page">

                {this.state.loading ? <div className="spin-container"><Spinner /></div>
                    : <ContactList 
                        list={this.state.filterdata} 
                        handle = {this.filterData}
                        tags = {this.state.tags}
                        switchInptpage = {this.showInputPage}
                        changeCurrent = {this.changeCurrent}
                    />
                }


                {/* <!-- Details Page--> */}
                {
                    this.state.showInsert ? 
                    (
                        <div>Input Page</div>
                    ) : 
                    (
                        <ContactDetails current={this.state.current}/>
                    )
                }
                
            </section >
        )
    }
}

export default HomePage