import { useState } from 'react';
import img1 from '../images/syncal.png';
import img2 from '../images/syncalwhite.png';
import imageSrc from './login.js';

const Intro = () => {

    const [imageSrc, setImageSrc] = useState(img1);

    function handleImagechange() {
        setImageSrc(img2);
        
      }

    return (
        <section id="s1">
                  <div className="logo">
                      <img src={imageSrc} id="img" ></img>
                  </div>
                  <div className="Title">
                      <h1 id="introtitle">Syncal</h1>
                  </div>
            </section>
    )

}

export default Intro;