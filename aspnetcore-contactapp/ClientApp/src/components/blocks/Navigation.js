import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { Login } from '../api-authorization/Login'
import { LoginMenu } from '../api-authorization/LoginMenu'
import Brand from '../houses/Brand';

class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation">
                <Brand />
                
                <LoginMenu className="login">
                </LoginMenu>
            </div>
        )
    }
}

export default Navigation