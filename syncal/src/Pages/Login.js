import React, {useEffect, useState } from 'react';
import './css/Login.css';
import img1 from './images/syncal.png';
import img2 from './images/syncalwhite.png';
import { useSpring, animated } from 'react-spring';
import Intro from './components/intro';
import LoginLayout from './components/login';





function Login (){
        return (
          <>
          <Intro />
          <LoginLayout />
        </>
        )
    }
export default Login;
