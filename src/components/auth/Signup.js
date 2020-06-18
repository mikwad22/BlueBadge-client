import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button,} from 'reactstrap';
import APIURL from '../../helpers/enviroment';
import './Auth.css';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/auth/user/signup`, {
            method: 'POST',
            body: JSON.stringify({user:{username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }) .then(
            (response) => response.json()
        ) .then((data) => {
            props.updateToken(data.sessionToken);
        })
    }

    return(
       <div>
            <h1 className="header">SIGN-UP</h1>
            <Form className="signup" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username:</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" required minLength="4" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password:</Label>
                    <Input type="password" required minLength="5" onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button className="button" type="submit">Sign-up as a new user</Button>
            </Form>
        </div>
    )
}

export default Signup;