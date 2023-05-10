import React from 'react';
import Navegationbar from './components/navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function NewEvent() {
    return (
        <div>
            <Navegationbar></Navegationbar>
            <a href="/">
                <button type="button" class="btn btn-outline-secondary backbut">Go back {'<'}-</button>
            </a>
            <div class='formtype'>
                <h2>Create a new Event</h2>
                <div id='form'>
                    <Form id='grouform'>
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
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </div>

            </div>
        </div>
    );
}

export default NewEvent;