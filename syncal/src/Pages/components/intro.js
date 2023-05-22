import { useState } from 'react';
import img1 from '../images/syncal.png';
import img2 from '../images/syncalwhite.png';
import imageSrc from './login.js';

const Intro = (props) => {


    const [showQuestionModal, setShowQuestionModal] = useState(false);

    const handleQuestionButtonClick = () => {
        setShowQuestionModal(true);
    };

    const closeQuestionButtonModal = () => {
        setShowQuestionModal(false);
    };


    return (
        <>
            <section id="s1" style={{ height: '100vh' }}>
                <div style={{height:"100%"}}>
                    <div className="intrologo">
                        <img src={props.image} id="img" style={{margintop:"25rem"}} ></img>
                    </div>
                    <div id="buttonquestion">
                        <button type="button" id="buttonquestionifself" onClick={handleQuestionButtonClick}>
                            <p id="buttonquestiontext">?</p>
                        </button>
                    </div>
                </div>
                <div id="introttitle">
                    <h1 id="introtitle">Syncal</h1>
                    <h2 id="introsubtitle">A calendar tool for everyone</h2>
                    <a href="#s2" id="scrolldownbuttonintro" onClick={props.onClick}>Get started</a>
                </div>

            </section>

            {showQuestionModal && (
                <div className={`modal ${showQuestionModal ? 'open' : ''}`} id="modaloverlay" onClick={closeQuestionButtonModal}>
                    <div className={`modal-content ${showQuestionModal ? 'open' : ''}`} id="settingsmodal">
                        <h2 id="questionh2">Syncal</h2>
                        <p id="textquestion">Syncal is a Web Aplication where users can ...</p>
                        <button  id="savesettingsbutton" onClick={closeQuestionButtonModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    )

}

export default Intro;