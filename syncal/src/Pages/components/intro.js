import { useState } from 'react';
import img1 from '../images/syncal.png';
import img2 from '../images/syncalwhite.png';
import imageSrc from './login.js';

const Intro = (props) => {


    return (
        <>
            <section id="s1" style={{ height: '100vh' }}>
                <div className="intrologo">
                    <img src={props.image} id="img" ></img>
                </div>
                <div id="introttitle">
                    <h1 id="introtitle">Syncal</h1>
                    <h2 id="introsubtitle">A calendar tool for everyone</h2>
                    <a href="#s2" id="scrolldownbuttonintro" onClick={props.onClick}>Get started</a>
                </div>

            </section>
        </>
    )

}

export default Intro;