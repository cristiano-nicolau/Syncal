import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import img1 from '../images/syncal.png';
import img2 from '../images/syncalwhite.png';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


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
            window.location.href = "/login#s2"; // Replace with your target page URL
        }, 1500);
        setActivePanel('login');
    };



    const [showLogin, setShowLogin] = useState(false);

    // Function to handle the register button click
    const handleLoginClickModal = () => {
        setShowLogin(true);

        setTimeout(() => {
            setShowLogin(false);
            window.location.href = "/home"; // Replace with your target page URL
        }, 3000);
    };


    const registerForm = useForm({ mode: "all" });
    const loginForm = useForm({ mode: "all" });


    const [username, setName] = useState()
    const [regemail, setemail] = useState()
    const [regpass, setpass] = useState()


    const onSubmitRegister = (data) => {


        if (registerForm.formState.isValid) {
            console.log(data);
            handleRegisterClickModle();

        }

        setName("");
        setemail("");
        setpass("");

    };

    const onSubmitLogin = (data) => {


        if (loginForm.formState.isValid) {
            console.log(data);
            handleLoginClickModal();
        }
    };




    const ani = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });


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
                                <form id="loginform" onSubmit={registerForm.handleSubmit(onSubmitRegister)}>
                                    <h1 id="logtitle">Register here</h1>
                                    <input id="loginput" type="text" placeholder="Name" name="name" value={username}
                                        {...registerForm.register("name", { required: true })} />
                                    <error>
                                        <p>{registerForm.formState.errors.name?.type === "required" && "Name is required"}</p>
                                    </error>
                                    <input id="loginput" type="text" placeholder="Email" name="email" value={regemail} {...registerForm.register("email", {
                                        required: true,
                                        pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                                    })}></input>
                                    <error>
                                        <p>{registerForm.formState.errors.email?.type === "required" && "Email is required"}</p>
                                        <p>{registerForm.formState.errors.email?.type === "pattern" &&
                                            "Entered email is in wrong format"}</p>
                                    </error>
                                    <input id="loginput" type="password" placeholder="Password" name="password" value={regpass}  {...registerForm.register("password", {
                                        required: true,
                                        minLength: 5,
                                        maxLength: 20,
                                    })}></input>
                                    <error>
                                        <p>{registerForm.formState.errors.password?.type === "required" && "Password is required"}</p>
                                        <p>{registerForm.formState.errors.password?.type === "minLength" &&
                                            "Entered password is less than 5 characters"}</p>
                                        <p>{registerForm.formState.errors.password?.type === "maxLength" &&
                                            "Entered password is more than 20 characters"}</p>
                                    </error>
                                    <button type="submit" id="registerbutton" disabled={!registerForm.formState.isValid} >Register</button>
                                    <span id="underl" onClick={handleLoginClick} > Already have an account?</span>
                                    <div class="social-container">
                                        <a href="#" class="social"><i class="fa fa-facebook"></i></a>
                                        <a href="#" class="social"><i class="fa fa-google"></i></a>
                                        <a href="#" class="social"><i class="fa fa-linkedin"></i></a>
                                    </div>
                                </form>
                            </div>
                            <div class="form-container login-container" id="logregcont">
                                <form id="loginform" onSubmit={loginForm.handleSubmit(onSubmitLogin)}>
                                    <h1 id="logtitle">Login here</h1>
                                    <input id="loginput" type="email" placeholder="Email" {...loginForm.register("email", { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i, })}></input>
                                    <error>
                                        <p>{loginForm.formState.errors.email?.type === "required" && "Email is required"}</p>
                                        <p>{loginForm.formState.errors.email?.type === "pattern" && "Entered wrong email"}</p>
                                    </error>
                                    <input id="loginput" type="password" placeholder="Password" {...loginForm.register("password", {
                                        required: true,
                                    })}></input>
                                    <error>
                                        <p>{loginForm.formState.errors.password?.type === "required" && "Password is required"}</p>
                                    </error>
                                    <span id="underlink" >Forget your password?</span>
                                    <button type='submit' id="loginbutton" disabled={!loginForm.formState.isValid}>Login</button>
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

                        {/* Modal */}
                        {showLogin && (
                            <div id="modal">
                                <div id="modal-content">
                                    <h2>Logging in</h2>
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