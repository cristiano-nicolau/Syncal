import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useState } from "react";
import imgwhite from '../images/syncal.png'

function Navegationbar() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000)
    }, [])
    return (
        <Navbar bg="dark" expand="lg">
            <a href="/">
            <img img={imgwhite} id="navbarimg" ></img>
            <Navbar.Brand  style ={{margin:"0 0 0 1rem "}}>Syncal</Navbar.Brand>
            </a>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link> {new Date().toLocaleString()} </Nav.Link>

                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <NavDropdown title="João Dias" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Settings
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/login">
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>

        </Navbar>
    );
}

export default Navegationbar;