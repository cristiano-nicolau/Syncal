import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Schedule from './schedule';
import Schedule2 from './schedule2';
import PopupButton from './buttons';
import '../css/homebox.css';
import Dropdown from 'react-bootstrap/Dropdown';
import ReactSwitch from 'react-switch';
import Video1 from '../videos/video1.mp4';
import Video2 from '../videos/video2.mp4';
import { useEffect } from 'react';


function Homebox() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var now = new Date();
    var day = days[now.getDay()];
    var month = months[now.getMonth()];
    const [selectModal, setSelectedModal] = useState(null);
    const handleClose = () => setSelectedModal(null);
    const handleShow = (modalid) => setSelectedModal(modalid);
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





    const videos = [
        {
            src: Video1,
            type: 'video/mp4'
        },
        {
            src: Video2,
            type: 'video/mp4'
        },
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (!videoElement) {
            return;
        }

        const handleVideoEnded = () => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        };

        videoElement.addEventListener('ended', handleVideoEnded);

        return () => {
            videoElement.removeEventListener('ended', handleVideoEnded);
        };
    }, [videos.length]);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (!videoElement) {
            return;
        }

        videoElement.currentTime = 0;
        console.log(videoRef.current);
        videoElement.load();
        videoElement.play().catch((error) => console.log(error));
    }, [currentVideoIndex]);

    if (videos.length === 0) {
        return <div>No videos available.</div>;
    }

    return (
        <>
            <div id='homebox' style={{ display: 'inline-block', float: 'left' }}>
                <h1>
                    Welcome João Dias,
                </h1>

                <div id='HomeButtons' class="container space-around" >
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            New
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/newcalendar">Calendar</Dropdown.Item>
                            <Dropdown.Item href="/newgroup">Group</Dropdown.Item>
                            <Dropdown.Item href="/newevent">Event</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <a href="/calendar">
                        <button href="/calendar" type="button" class="btn btn-outline-secondary">My schedules</button>
                    </a>
                    <button onClick={openModal} class="btn btn-outline-secondary">Sharing Options</button>
                    <a href="/chat">
                        <button type="button" href='/chat' class="btn btn-outline-secondary">Group chat</button>
                    </a>
                </div>
                <h2>
                    Today events ({day})
                </h2>
                <div id='schedbut'>
                    <h5>From 9:00 to 11:00</h5>
                    <>
                        <button onClick={() => handleShow(1)} type="button" class="btn btn-secondary btn-lg btn-block mb-3">Aula de BD</button>

                        <Modal show={selectModal === 1} onHide={handleClose} size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Header>
                                <Modal.Title>Aula de Base de Dados</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Continuação do projeto. Continuar a desenvolver a interface gráfica. Importatnte- Duvida sobre Visual Basics perguntar ao stor</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                    <h5>From 11:00 to 13:00</h5>
                    <>
                        <button onClick={() => handleShow(2)} type="button" class="btn btn-secondary btn-lg btn-block mb-3">Aula de C</button>

                        <Modal show={selectModal === 2} onHide={handleClose} size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Header>
                                <Modal.Title>Aula de Compiladores</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Continuar projeto. Dividir tarefas e marcar reuniao para quando for possivel.</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                    <h5>From 14:00 to 16:00</h5>
                    <>
                        <button onClick={() => handleShow(3)} type="button" class="btn btn-secondary btn-lg btn-block mb-3">Aula de IHC</button>

                        <Modal show={selectModal === 3} onHide={handleClose} size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Header>
                                <Modal.Title>Aula de IHC</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Apresentação do Projeto Final. </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                    <h5>From 16:00 to 17:00</h5>
                    <>
                        <button onClick={() => handleShow(4)} type="button" class="btn btn-secondary btn-lg btn-block mb-3">Aula de Compiladores</button>

                        <Modal show={selectModal === 4} onHide={handleClose} size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Header>
                                <Modal.Title>Aula de Compiladores</Modal.Title>
                            </Modal.Header>
                            <Modal.Body> Aula terica, resoluçao do teste modelo, tirar duvida no exercicio 3b. </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                    <h5>From 18:30 to 21:00</h5>
                    <>
                        <button onClick={() => handleShow(6)} type="button" class="btn btn-secondary btn-lg btn-block mb-3">Futebolada</button>

                        <Modal show={selectModal === 6} onHide={handleClose} size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Header>
                                <Modal.Title>Treino de Futebol</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Treino  no campo das Monçoes. Força Torre crl</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                </div>
                <h2>
                    This month events ({month})
                </h2>
                <div id='schedbut'>

                    <h5>Day 2</h5>
                    <h6>From 11:00 to 12:00 </h6>
                    <>
                        <button onClick={() => handleShow(10)} type="button" class="btn btn-secondary btn-lg btn-block mb-3">Consulta</button>

                        <Modal show={selectModal === 10} onHide={handleClose} size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Header>
                                <Modal.Title>
                                    Consulta
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Consulta Hospital da Luz</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <h5>Day 04-08</h5>
                        <>
                            <button onClick={() => handleShow(7)} type="button" class="btn btn-secondary btn-lg btn-block mb-3">Ferias com a malta</button>

                            <Modal show={selectModal === 7} onHide={handleClose} size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                <Modal.Header>
                                    <Modal.Title>Ferias com a malta</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Ferias em espanha. Nao esquecer de pagar a casa ao Paulo. Pedir guito aos pais que a vida nao tá life.</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                        <h5>Day 12</h5>
                        <h6>From 16:00 to 15:00</h6>
                        <>
                            <button onClick={() => handleShow(8)} type="button" class="btn btn-secondary btn-lg btn-block mb-3">Reuniao para estagio</button>

                            <Modal show={selectModal === 8} onHide={handleClose} size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                <Modal.Header>
                                    <Modal.Title>Reuniao para estagio</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Fé em deus que a vida nao tá life.</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                        <h5>Day 28</h5>
                        <>
                            <button onClick={() => handleShow(9)} type="button" class="btn btn-secondary btn-lg btn-block mb-3">Festa de Anos</button>

                            <Modal show={selectModal === 9} onHide={handleClose} size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                <Modal.Header>
                                    <Modal.Title>
                                        Festa de Anos do Pedro
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Bubedeira garantida. Da-lhe Da-lhe</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                    </>
                </div>
            </div>

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

            <div id="pubcontainer" style={{ display: 'inline-block', float: 'right' }}>
                <div id="addcontainer">
                    <video autoPlay={true} muted ref={videoRef}>
                        <source src={videos[currentVideoIndex].src} type={videos[currentVideoIndex].type} />
                    </video>
                </div>

            </div>

        </>

    );
}

export default Homebox;