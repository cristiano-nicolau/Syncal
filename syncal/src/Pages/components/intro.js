import { useState } from 'react';
import img1 from '../images/syncal.png';
import img2 from '../images/syncalwhite.png';
import imageSrc from './login.js';

const Intro = (props) => {


    return (
        <section id="s1">
                  <div className="intrologo">
                      <img src={props.image} id="img" ></img>
                  </div>
                  <div className="introttitle">
                      <h1 id="introtitle">Syncal</h1>
                  </div>
            </section>
    )

}

export default Intro;