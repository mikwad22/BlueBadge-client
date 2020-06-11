import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import './Auth.css';

const Auth = (props) => {
    return(
        <div>
            <h4 className="greets">Welcome to Moodify. A safe place to keep track of your moods and thoughts.</h4>
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
        </div>  
    )
}

export default Auth;