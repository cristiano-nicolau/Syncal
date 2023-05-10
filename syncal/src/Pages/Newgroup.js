import React from 'react';
import Navegationbar from './components/navbar';
import Form from 'react-bootstrap/Form';
function NewGroup() {
    return (
        <div>
            <Navegationbar></Navegationbar>
            <div>
                <button type="button" class="btn btn-outline-secondary">Go back {'<'}-</button>
                <>
                    <Form.Group className="mb-3">
                        <Form.Label>Disabled input</Form.Label>
                        <Form.Control placeholder="Disabled input" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Disabled select menu</Form.Label>
                        <Form.Select disabled>
                            <option>Disabled select</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="Can't check this" disabled />
                    </Form.Group>
                </>
            </div>
        </div>
    );
}

export default NewGroup;