import React, { useEffect, useState } from 'react';
import './css/Login.css';
import img1 from './images/syncal.png';
import img2 from './images/syncalwhite.png';
import { useSpring, animated } from 'react-spring';
import Intro from './components/intro';
import LoginLayout from './components/login';



function Login() {



  const [imageSrc, setImageSrc] = useState(img1);
  const [active, setActive] = useState(false);

  const handleLoginActive = () => {
    setActive(true);
  }

  function handleImagechange() {
    setImageSrc(img2);
  }

  const setDark = () => {

    // 2
    localStorage.setItem("theme", "dark");

    // 3
    document.documentElement.setAttribute("data-theme", "dark");

  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };



  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark();
      setImageSrc(img2);
    } else {
      setLight();
      setImageSrc(img1);
    }
  };


  return (
    <div id="alldivslogin">
      <Intro image={imageSrc} onClick={handleLoginActive} />
      <LoginLayout onClick={toggleTheme} show={active} />
    </div>
  )
}
export default Login;

