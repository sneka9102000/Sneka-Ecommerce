import React, { Fragment, useRef, useState, useEffect } from "react";
import "../User/Usercss/LoginSignUp.css";
import Loader from "../layout/Loader/loader";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import { clearErrors, login, register } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ValidateLogin from "../../utils/validateLogin";


const LoginSignUp = ({ location }) => {
  //console.log("hello hi")
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");

  const { error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const validate = () => {

    console.log("Cred : "+loginEmail, loginPassword);

    const error = ValidateLogin(loginEmail, loginPassword)

    let emailError = error.emailError;
    let passwordError = error.passwordError;

    console.log("Errors : "+emailError, passwordError)

    if (emailError) {
      setEmailError(emailError);
      emailField.classList.add('is-invalid')
    } else {
      emailField.classList.remove('is-invalid')
    }

    if (passwordError) {
      setPasswordError(passwordError)
      passwordField.classList.add('is-invalid')
    } else {
      passwordField.classList.remove('is-invalid')
    }

    if (emailError || passwordError) {
      return false;
    }

    return true
  }


  const loginSubmit = (e) => {
    //console.log("submitted")
    e.preventDefault();
    const isValid = validate();

    dispatch(login(loginEmail, loginPassword))
  };
  const registerSubmit = (e) => {
    e.preventDefault();

    let userObject = {
      name, email, password, avatar, avatarPreview
    }
    console.log("user object ", userObject)
    dispatch(register(userObject))
  };


  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };


      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate(window.location.search ? location.search.split("=")[1] : "/account");
    }
  }, [dispatch, error, alert, isAuthenticated]);



  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };


  return (
    <div>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div>
            <div className="LoginSignUpToggle">
              <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
              <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
            </div>
            <button ref={switcherTab}></button>
          </div>
          <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
            <div className="loginEmail" style={{display:"inline"}}>
              <MailOutlineIcon style={{margin:"1% 0 0 0"}} />
              <input
                type="text"
                placeholder="Enter your Email Id"
                id="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <strong>{emailError}</strong>
          </div>
            <div className="loginPassword" style={{display:"inline"}}>
              <LockOpenIcon style={{margin:"1% 0 0 0"}} />
              <input
                type="password"
                placeholder="Enter the Password"
                id="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              /><br/>
              <strong >{passwordError}</strong>
            </div>
            <Link to="/password/forgot">Forget Password ?</Link>
            <input type="submit" value="Login" className="loginBtn" />
          </form>
          <form
            className="signUpForm"
            ref={registerTab}
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <div className="signUpName">
              <FaceIcon />
              <input
                type="text"
                placeholder="Enter your Name"
                required
                name="name"
                value={name}
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpEmail">
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Enter your Email Id"
                required
                name="email"
                value={email}
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpPassword">
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Enter the Password"
                required
                name="password"
                value={password}
                onChange={registerDataChange}
              />
            </div>

            <div id="registerImage">
              <img src={avatarPreview} alt="Avatar Preview" />
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={registerDataChange}
              />
            </div>
            <input type="submit" value="Register" className="signUpBtn" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp;
