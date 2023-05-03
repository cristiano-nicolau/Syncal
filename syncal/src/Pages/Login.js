import React, {useState } from 'react';
import './css/Login.css';
import logo from './images/Logo.png';

function Login (){
            const [activePanel, setActivePanel] = useState('login');
          
            function handleRegisterClick() {
              setActivePanel('register');
            }
          
            function handleLoginClick() {
              setActivePanel('login');
            }
            

        return (
            <div>
                <div id="SyncalImage">
                    <img class="syncal" src={logo}></img>
                </div>
                <div className={`container ${activePanel === 'register' ? 'right-panel-active' : ''}`}>
                    <div class="form-container register-container"> 
                        <form action="#">
                            <h1>Register here</h1>
                            <input type="text" placeholder="Name"></input>
                            <input type="email" placeholder="Email"></input>
                            <input type="password" placeholder="Password"></input>
                            <button>Register</button>
                            <span id="underl"onClick={handleLoginClick}>Already have an account?</span>
                            <div class="social-container">
                                <a href="#" class="social"><i class="fa fa-facebook"></i></a>
                                <a href="#" class="social"><i class="fa fa-google"></i></a>
                                <a href="#" class="social"><i class="fa fa-linkedin"></i></a>
                            </div>
                        </form>
                    </div>
                    <div class="form-container login-container">
                    <form action="#">
                        <h1>Login here</h1>
                        <input type="email" placeholder="Email"></input>
                        <input type="password" placeholder="Password"></input>
                        <div class="content">
                            <div class="checkbox">
                                <input type="checkbox" name="checkbox" id="checkbox"></input>
                                <label for="Remember me"></label>
                            </div>
                            <div class="pass-link">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                        <button>Login</button>
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
                                <h1 class="title">Welcome to Syncal</h1>
                                <p>Lets build our world together</p>
                                <button class="ghost" id="login"  onClick={handleLoginClick}>Login
                                    <i class="lni-lni-arrow-left-right"></i>
                                </button>

                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1 class="title">Hello from Syncal</h1>
                                <p>If you don't have an account yet,join us by register and start your journey</p>
                                <button class="ghost" id="register" onClick={handleRegisterClick}>Register
                                    <i class="lni-lni-arrow-right-left"></i>
                                </button>

                            </div>


                        </div>
                    </div>
                </div> 
        </div>
        )
    }
export default Login;
