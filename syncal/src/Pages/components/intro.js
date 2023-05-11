import { useState } from 'react';
import img1 from '../images/syncal.png';
import img2 from '../images/syncalwhite.png';
import imageSrc from './login.js';

const Intro = (props) => {


    return (
        <>
            <section id="s1" style={{ height: '90vh' }}>
                <div className="intrologo">
                    <img src={props.image} id="img" ></img>
                </div>
                <div className="introttitle">
                    <h1 id="introtitle">Syncal</h1>
                </div>

            </section>
            <a href="#s2" id="scrolldownbuttonintro" onClick={props.onClick}>Get started</a>
        </>
    )

}

export default Intro;