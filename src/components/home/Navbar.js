import React, {useState} from 'react';
import {Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Button} from 'reactstrap';
import './Navbar.css';

const Sitebar = (props) => {
   const [isOpen, setIsOpen] = useState(false);
   const toggle = () => {
       let newIsOpen = !isOpen;
       setIsOpen(newIsOpen);
   }
    
    return(
        <div>
        <Navbar color="" light expand="md">
            <NavbarBrand className="tracker" href="/">Mood Tracker</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        </div>
        
    )
}

export default Sitebar;