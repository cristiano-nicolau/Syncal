import React, {useState} from 'react';
import Navegationbar from './components/navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




function Newcalendar() {

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
                <h2>Create a new Calendar</h2>
                <div id='form'>
                    <Form id='grouform'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Group name</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <div id='inlineform'>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Add members</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Button variant="primary" id='memberbut'>
                                Add member
                            </Button>
                        </div>
                        <Form.Group className="mb-3" controlId="textarea">
                            <Form.Label>Add group profile information</Form.Label>
                            <textarea form="testformid" name="taname" id="taid" cols="35" wrap="soft" placeholder=''></textarea>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Make this a public group" />
                        </Form.Group>

                            <Button variant="primary" id="memberbut" onClick={handleRegisterClickModle} >
                                Submit
                            </Button>
                    </Form>
                </div>

            </div>

            {/* Modal */}
            {showModalCalendar && (
                <div id="modal2">
                    <div id="modal-content">
                        <h2>Calendar has been created successfully</h2>
                    </div>
                </div>
            )}
        </div>
    );
}


export default Newcalendar;