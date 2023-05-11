import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import img from '../images/imguser.jpg';
import Calendar from './calendar';
import '../css/groups.css'

import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
function Chat() {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();
  const handleClose = () => {
    let path = `/`;
    navigate(path);
  };
  const handleShow = () => setShow(true);
  const [groups, setGroups] = useState([
    { id: 1, name: 'IHC' },
    { id: 2, name: 'CD' },
    { id: 3, name: 'Festa de Aniversario' },
    { id: 4, name: 'Futebol as Quartas' },
  ]);

  const [selectedGroup, setSelectedGroup] = useState(null);

  const [messages, setMessages] = useState([]);

  const [newMessage, setNewMessage] = useState('');

  const handleGroupClick = (group) => {
    if (selectedGroup == group) {
      setSelectedGroup(null);
    } else {
      setSelectedGroup(group);
      setMessages([]);

    }
  };

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleNewMessageSubmit = (event) => {
    event.preventDefault();
    const newMessageObject = {
      author: 'Eu',
      text: newMessage,
    };
    setMessages([...messages, newMessageObject]);
    setNewMessage('');
  };



  return (
    //ir para a pagina calendar.js quando clicar no button
    <><div>
      <Button variant="primary" href='calendar'>calendar</Button>
    </div>
      <Container fluid>
        <Row>
          <Col md={3} id="g1">
            <ListGroup>
              {groups.map((group) => (
                <ListGroup.Item action variant='flush' className="my-3"
                  key={group.id}
                  active={group === selectedGroup}
                  onClick={() => handleGroupClick(group) > group.name}
                >
                  {group.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={6} id='g2'>
            {selectedGroup ? (

              <Container fluid id='g3'>
                <h1 id='textocentro'>{selectedGroup.name}</h1>
                <div id='chat'>
                  <img src={img} id="imggroups"></img>
                  <h3>Cristiano Nicolau</h3>
                  <h5>Olá, tudo bem?</h5>
                </div>
                <div className="chat-messages" id='mensagem'>
                </div>
                <form id='formulariogrupos' onSubmit={handleNewMessageSubmit}><p>Envie uma mensagem:</p>
                  <div className="form-group" id='chatform'>
                    <input
                      type="text"
                      className="form-control"
                      id="newMessage"
                      value={newMessage}
                      onChange={handleNewMessageChange} />
                  </div>
                  <>
                    <Button variant="primary" id='chatbut' onClick={handleShow}>
                      Submit
                    </Button>
                    <Modal show={show} onHide={handleClose} size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered>
                      <Modal.Header>
                        <Modal.Title>OOPS...Thats not developed yet</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>I mean look at me? Do i look like i fuckin care... go home FFS</Modal.Body>
                      <Modal.Footer>

                        <Button variant="primary" onClick={handleClose}>
                          Home
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </>
                </form>

              </Container>
            ) : (
              <div>Selecione um grupo</div>
            )}
          </Col>
        </Row>
      </Container></>
  );
}
export default Chat;