import React from 'react'
import { Link } from 'react-router-dom';

class Brand extends React.Component {
    render(){
        return (
            <Link to="/" class="brand">
                    <div>Contact App</div>
            </Link>
        )
    }
}

export  default Brand;