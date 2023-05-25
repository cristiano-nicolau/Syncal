import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import React, { useEffect, useState } from "react";
import ReactSwitch from 'react-switch';
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import NotificationBell from './NotificationBEll';

function Navegationbar(props) {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000)
    }, [])

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);


    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const [sharewithfriends, setSharewithfriends] = useState(false);
    const [shareeventsinfo, setShareeventsinfo] = useState(false);

    const handleChange1 = val1 => {
        setChecked1(val1)
    }

    const handleChange2 = val2 => {
        setChecked2(val2)
    }

    const handleChange3 = val3 => {
        setChecked3(val3)
    }



    const handleSaveSettings = () => {

        console.log('Saving settings...');

        closeModal();
    };



    return (
        <Navbar bg="dark" expand="lg">
            <a href="/home">
                <img src={require("../images/syncalwhite.png")} id="navbarimg" ></img>
                <Navbar.Brand style={{ margin: "0 0 0 1rem " }}>Syncal</Navbar.Brand>
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
                <div className="notification-bell">
                    <NotificationBell />
                </div>
                <NavDropdown title="João Dias" id="navbarScrollingDropdown" style={{width:'15%',textAlign:'center'}}>
                    <NavDropdown.Item href="../JoãoDias">Profile</NavDropdown.Item>
                    <NavDropdown.Item onClick={openModal}>
                        Settings
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>

            {modalOpen && (
                <div className={`modal ${modalOpen ? 'open' : ''}`} id="modaloverlay">
                    <div className={`modal-content ${modalOpen ? 'open' : ''}`} id="settingsmodal" >
                        <h2 id="sharingh2">Sharing Settings</h2>
                        <div style={{ margin: '5rem 0 0 0 ', height: '80%', width: '100%' }}>
                            <form className="sharing-form">
                                <span style={{ margin: '5rem 0 0 0', display: 'block' }} id="spanssettings">
                                    <p className="toggle-theme-text" id="psettings">Do you want to share your calendar events with other people? </p>
                                    <label className="toggle-theme" htmlFor='checkbox' id="labelsettings">
                                        <ReactSwitch
                                            checked={checked1}
                                            onChange={handleChange1}
                                        />
                                    </label>
                                </span>
                                <span style={{ margin: '2rem 0 0 0', display: 'block' }} >
                                    <p className="toggle-theme-text" id="psettings">Do you want to share your calendar events with other people? </p>
                                    <label className="toggle-settings" htmlFor='checkbox' id="labelsettings">
                                        <ReactSwitch
                                            checked={checked2}
                                            onChange={handleChange2}
                                        />
                                    </label>
                                </span>
                                <span style={{ margin: '2rem 0 0 0', display: 'block' }}>
                                    <p className="toggle-theme-text" id="psettings">Do you want to share your calendar events with other people? </p>
                                    <label className="toggle-theme" htmlFor='checkbox' id="labelsettings">
                                        <ReactSwitch
                                            checked={checked3}
                                            onChange={handleChange3}
                                        />
                                    </label>
                                </span>

                                <button type="button" id="savesettingsbutton" onClick={handleSaveSettings}>
                                    <span id="buttontextsettings" style={{ display: "inline", whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Save Settings</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </Navbar>


    );
}

export default Navegationbar;