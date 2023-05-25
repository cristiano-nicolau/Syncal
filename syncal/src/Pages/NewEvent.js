import React, { useState } from 'react';
import Navegationbar from './components/navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
function NewEvent() {
    const [show, setShow] = useState(false);
    let navigate = useNavigate();
    const handleClose = () => {
        let path = `/home`;
        navigate(path);
    };
    const handleShow = () => setShow(true);

    const [showModalCalendar, setShowModalCalendar] = useState(false);

    // Function to handle the register button click
    const handleRegisterClickModle = () => {
        setShowModalCalendar(true);

        setTimeout(() => {
            setShowModalCalendar(false);
            window.location.href="/home";
        }, 2000);
    };
    return (


        <div>
            <Navegationbar></Navegationbar>
            <a href="/home">
                <button type="button" id="gobackbutton" class="btn btn-outline-secondary backbut">Go back {'<'}-</button>
            </a>
            <div class='formtype'>
                <h2>Create a new Event</h2>
                <div id='form'>
                    <Form id='grouform'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Event name</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Event Day</Form.Label>
                            <Form.Control type="date" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Event Hour</Form.Label>
                            <Form.Control type="time" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="textarea">
                            <Form.Label>Add event details</Form.Label>
                            <textarea form="testformid" name="taname" id="taid" cols="35" wrap="soft" placeholder=''></textarea>
                        </Form.Group>
                        <>
                            <Button variant="primary" id="memberbut" onClick={handleRegisterClickModle}>
                                Submit
                            </Button>
                        </>
                    </Form>
                </div>

            </div>
            {/* Modal */}
            {showModalCalendar && (
                <div id="modal2">
                    <div id="modal-content">
                        <h2>Event has been created successfully</h2>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NewEvent;