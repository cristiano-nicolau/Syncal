import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import img from '../images/imguser.jpg';
import '../css/groups.css'

function Chat() {
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
    <div>
      <Container fluid >
        <Row>
          <Col md={3} id="g1">
            <ListGroup >
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
                <h1 id='textocentro' >{selectedGroup.name}</h1>
                <div id='chat'>
                  <img src={img} id="imggroups" ></img>
                  <h3>Cristiano Nicolau</h3>
                  <h5>Olá, tudo bem?</h5>
                </div>
                <div className="chat-messages" id='mensagem' >
                </div>
                <form id='formulariogrupos' onSubmit={handleNewMessageSubmit}><p>Envie uma mensagem:</p>
                  <div className="form-group" id='chatform'>
                    <input
                      type="text"
                      className="form-control"
                      id="newMessage"
                      value={newMessage}
                      onChange={handleNewMessageChange}
                    />
                  </div>
                  <button type="submit" id='chatbut' className="btn btn-primary">
                    Enviar
                  </button>
                </form>

              </Container>
            ) : (
              <div>Selecione um grupo</div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Chat;