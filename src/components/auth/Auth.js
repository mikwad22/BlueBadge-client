import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import './Auth.css';

const Auth = (props) => {
    return(
         <Container className="auth-container">
            <Row>
                <Col md="4">
                    <Signup updateToken={props.updateToken}/>
                </Col>
                <Col md ="4" className="login-col">
                    <Login updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Auth;