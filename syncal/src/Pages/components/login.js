import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import img1 from '../images/syncal.png';
import img2 from '../images/syncalwhite.png';
import { Link } from 'react-router-dom';

const LoginLayout = (props) => {
    const [activePanel, setActivePanel] = useState('login');

    function handleRegisterClick() {
        setActivePanel('register');
    }

    function handleLoginClick() {
        setActivePanel('login');
    }


    const [showModal, setShowModal] = useState(false);

    // Function to handle the register button click
    const handleRegisterClickModle = () => {
        setShowModal(true);

        setTimeout(() => {
            setShowModal(false);
            window.location.href = "/login?#s2"; // Replace with your target page URL
        }, 3000);
        setActivePanel('login');
    };



    const [showLogin, setShowLogin] = useState(false);

    // Function to handle the register button click
    const handleLoginClickModal = () => {
        setShowLogin(true);

        setTimeout(() => {
            setShowLogin(false);
            window.location.href = "/"; // Replace with your target page URL
        }, 3000);
    };




    const ani = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1500 } });


    return (
        <section id="s2">
            <animated.div style={ani}>
                <div className="toggle-theme-wrapper">
                    <p className="toggle-theme-text">Dark Mode</p>
                    <label className="toggle-theme" htmlFor='checkbox'>
                        <input type="checkbox" id="checkbox" onChange={props.onClick}></input>
                        <div className="slider round"> </div>
                    </label>
                </div>

                {props.show &&
                    <>
                        <div style={{ height: '12vh' }}>

                        </div>
                        <div id="logincontainer" className={`container ${activePanel === 'register' ? 'right-panel-active' : ''}`}>
                            <div class="form-container register-container" id="logregcont">
                                <form id="loginform">
                                    <h1 id="logtitle">Register here</h1>
                                    <input id="loginput" type="text" placeholder="Name"></input>
                                    <input id="loginput" type="email" placeholder="Email"></input>
                                    <input id="loginput" type="password" placeholder="Password"></input>
                                    <button type="submit" id="registerbutton" onClick={handleRegisterClickModle} >Register</button>

                                    <span id="underl" onClick={handleLoginClick}>Already have an account?</span>
                                    <div class="social-container">
                                        <a href="#" class="social"><i class="fa fa-facebook"></i></a>
                                        <a href="#" class="social"><i class="fa fa-google"></i></a>
                                        <a href="#" class="social"><i class="fa fa-linkedin"></i></a>
                                    </div>
                                </form>
                            </div>
                            <div class="form-container login-container" id="logregcont">
                                <form id="loginform">
                                    <h1 id="logtitle">Login here</h1>
                                    <input id="loginput" type="email" placeholder="Email"></input>
                                    <input id="loginput" type="password" placeholder="Password"></input>
                                    <div class="content">
                                        <div class="pass-link">
                                            <a id="loginforget" href="#">Forgot your password?</a>
                                        </div>
                                    </div>
                                    <a href="/">
                                        <button type='button' id="loginbutton" onClick={}>Login</button>
                                    </a>
                                    <span id="underl" onClick={handleRegisterClick}>Dont have an account?</span>
                                    <div class="social-container">
                                        <a href="#" class="social"><i class="fa fa-facebook"></i></a>
                                        <a href="#" class="social"><i class="fa fa-google"></i></a>
                                        <a href="#" class="social"><i class="fa fa-linkedin"></i></a>
                                    </div>

                                </form>
                            </div>

                            <div class="overlay-container">
                                <div class="overlay">
                                    <div class="overlay-panel overlay-left">
                                        <h1 id="overlaytitle" class="title">Welcome to Syncal</h1>
                                        <p id="plogin">Lets build our world together</p>
                                        <button class="ghost" id="loginbutton" onClick={handleLoginClick}>Login
                                            <i class="lni-lni-arrow-left-right"></i>
                                        </button>

                                    </div>
                                    <div class="overlay-panel overlay-right">
                                        <h1 id="overlaytitle" class="title">Hello from Syncal</h1>
                                        <p id="plogin">If you don't have an account yet,join us by register and start your journey</p>
                                        <button class="ghost" id="loginbutton" onClick={handleRegisterClick}>Register
                                            <i class="lni-lni-arrow-right-left"></i>
                                        </button>

                                    </div>


                                </div>
                            </div>
                        </div>
                        {/* Modal */}
                        {showModal && (
                            <div id="modal">
                                <div id="modal-content">
                                    <h2>Registration Successful!</h2>
                                </div>
                            </div>
                        )}
                        <div style={{ height: '10vh' }}>

                        </div>

                        


                    </>
                }
            </animated.div>
        </section>
    )
}

export default LoginLayout;