import React from 'react'
import {
    Navbar,
    Nav, NavDropdown
} from "react-bootstrap"
import {useHistory} from "react-router-dom"
function MyNavbar() {
    const history = useHistory()
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">My application</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={()=>{
                        history.push("/")
                    }}>Home</Nav.Link>
                    <NavDropdown title="Collections" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={()=>{
                            history.push("/users")
                        }}>Users</NavDropdown.Item>
                        
                        <NavDropdown.Item onClick={()=>{
                            history.push("/userstab")
                        }}>Affichage</NavDropdown.Item>
                        
                       
                    </NavDropdown>
                    
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar
