import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PopupButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} type="button" class="btn btn-secondary btn-lg btn-block mb-3">Cry myself to sleep</button>

            <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header>
                    <Modal.Title>Cry myself to sleep</Modal.Title>
                </Modal.Header>
                <Modal.Body>Congrats you did it! Have some ice cream and stop crying </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Share
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PopupButton;