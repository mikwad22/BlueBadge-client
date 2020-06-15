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
            <NavbarBrand className="tracker" href="/">Moodify</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button className="navbutton" onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        </div>
        
    )
}

export default Sitebar;