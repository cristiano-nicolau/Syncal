import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import img1 from '../images/syncal.png';
import img2 from '../images/syncalwhite.png';

const LoginLayout = () => {
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


              const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1500 } });


    return (
        <div>
            <section id="s2">
              <animated.div style={props}>
                  <div className="toggle-theme-wrapper">
                          <p className="toggle-theme-text">Dark Mode</p>
                          <label className="toggle-theme" htmlFor='checkbox'>
                              <input type="checkbox" id="checkbox" onChange={toggleTheme}></input>
                              <div className="slider round"> </div>
                          </label> 
                  </div>

                  <div class="logindiv">
                  
                      <div id="SyncalImage">
                          <img src={imageSrc} id="img" ></img>
                      </div>


                      <div className={`container ${activePanel === 'register' ? 'right-panel-active' : ''}`}>
                          <div class="form-container register-container" id="logregcont"> 
                              <form action="#">
                                  <h1 id="logtitle">Register here</h1>
                                  <input id="loginput" type="text" placeholder="Name"></input>
                                  <input id="loginput" type="email" placeholder="Email"></input>
                                  <input id="loginput" type="password" placeholder="Password"></input>
                                  <button id="loginbutton">Register</button>
                                  <span id="underl"onClick={handleLoginClick}>Already have an account?</span>
                                  <div class="social-container">
                                      <a href="#" class="social"><i class="fa fa-facebook"></i></a>
                                      <a href="#" class="social"><i class="fa fa-google"></i></a>
                                      <a href="#" class="social"><i class="fa fa-linkedin"></i></a>
                                  </div>
                              </form>
                          </div>
                          <div class="form-container login-container" id="logregcont">
                          <form  action="#">
                              <h1 id="logtitle">Login here</h1>
                              <input id="loginput"type="email" placeholder="Email"></input>
                              <input id="loginput" type="password" placeholder="Password"></input>
                              <div class="content">
                                  <div class="checkbox">
                                      <input type="checkbox" name="checkbox" id="checkbox"></input>
                                      <label for="Remember me"></label>
                                  </div>
                                  <div class="pass-link">
                                      <a id="loginforget" href="#">Forgot your password?</a>
                                  </div>
                              </div>
                              <button id="loginbutton">Login</button>
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
                                      <p id="plogin">Lets build our world together</p>
                                      <button class="ghost" id="loginbutton"  onClick={handleLoginClick}>Login
                                          <i class="lni-lni-arrow-left-right"></i>
                                      </button>

                                  </div>
                                  <div class="overlay-panel overlay-right">
                                      <h1 class="title">Hello from Syncal</h1>
                                      <p id="plogin">If you don't have an account yet,join us by register and start your journey</p>
                                      <button class="ghost" id="loginbutton" onClick={handleRegisterClick}>Register
                                          <i class="lni-lni-arrow-right-left"></i>
                                      </button>

                                  </div>


                              </div>
                          </div>
                      </div>
                  </div> 
            </animated.div>
          </section>
        </div>
    )
}

export default LoginLayout;