import React from 'react';
import Navegationbar from './components/navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './css/form.css';
function NewGroup() {
    return (
        <div>
            <Navegationbar></Navegationbar>
            <a href="/">
                <button type="button" class="btn btn-outline-secondary backbut">Go back {'<'}-</button>
            </a>
            <div class='formtype'>
                <h2>Create a new Group</h2>
                <div id='form'>
                    <Form id='grouform'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Group name</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <div id='inlineform'>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Add members</Form.Label>
                                <Form.Control type="password" placeholder="" />
                            </Form.Group>
                            <Button variant="primary" id='memberbut' type="submit">
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
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </div>

            </div>
        </div>
    );
}

export default NewGroup;