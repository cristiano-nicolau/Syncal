import React, {useState } from 'react';
import './css/Login.css';
import img1 from './images/syncal.png';
import img2 from './images/syncalwhite.png';





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








function Login (){
            const [activePanel, setActivePanel] = useState('login');
          
            function handleRegisterClick() {
              setActivePanel('register');
            }
          
            function handleLoginClick() {
              setActivePanel('login');
            }


            const [imageSrc, setImageSrc] = useState(img1);

            function handleImagechange() {
                setImageSrc(img2);
              }
            

        return (
            <div>
                <div className="toggle-theme-wrapper">
                        <p className="toggle-theme-text">Dark Mode</p>
                        <label className="toggle-theme" htmlFor='checkbox'>
                            <input type="checkbox" id="checkbox" onChange={toggleTheme}></input>
                            <div className="slider round"> </div>
                        </label>
                        
                </div>
                
                <div id="SyncalImage">
                    <img src={imageSrc}  ></img>
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
