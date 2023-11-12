import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Authentication.css";
import { ToastContainer, toast } from "react-toastify";
import { notify } from "../utils/HelperFunctions";
import axios from "axios";
const Authentication = () => {
  const [clickedSubmit, setClickedSubmit] = useState(0);

  const [userName, setUsername] = useState({
    value: "",
    valid: false,
  });
  const [email, setEmail] = useState({
    value: "",
    valid: false,
  });
  const [password, setPassword] = useState({
    value: "",
    valid: false,
  });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    valid: false,
  });
  const [isSignIn, setIsSignIn] = useState(true);
  const toogleAuth = () => {
    setIsSignIn(!isSignIn);
    setUsername({
      value: "",
      valid: false,
    });
    setEmail({
      value: "",
      valid: false,
    });
    setPassword({
      value: "",
      valid: false,
    });
    setConfirmPassword({
      value: "",
      valid: false,
    });
  };

  const handleChangeUsername = (e) => {
    const patternString = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;

    const updateUsername = {
      ...userName,
    };
    updateUsername.value = e.target.value;
    updateUsername.valid =
      patternString.test(updateUsername.value.trim()) &&
      updateUsername.value.length <= 30 &&
      updateUsername.value.length >= 2;
    setUsername(updateUsername);
  };

  const handleChangeEmail = (e) => {
    setClickedSubmit(0);
    const patternEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const updateEmail = {
      ...email,
    };
    updateEmail.value = e.target.value;
    updateEmail.valid = patternEmail.test(updateEmail.value.trim());
    setEmail(updateEmail);
  };

  const handleChangePassword = (e) => {
    const patternPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

    const updatePassword = {
      ...password,
    };
    const updateConfirmPassword = {
      ...confirmPassword,
    };
    updatePassword.value = e.target.value;
    updatePassword.valid = patternPassword.test(updatePassword.value);
    updateConfirmPassword.valid =
      updateConfirmPassword.value === updatePassword.value;
    setPassword(updatePassword);
    setConfirmPassword(updateConfirmPassword);
  };

  const handleChangeConfirmPassword = (e) => {
    const patternPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    const updateConfirmPassword = {
      ...confirmPassword,
    };
    updateConfirmPassword.value = e.target.value;
    updateConfirmPassword.valid =
      updateConfirmPassword.value === password.value &&
      patternPassword.test(updateConfirmPassword.value);
    setConfirmPassword(updateConfirmPassword);
  };
  const handleSignup = (e) => {
    e.preventDefault();
    setClickedSubmit((prevState) => prevState + 1);
    if (
      userName.valid &&
      email.valid &&
      password.valid &&
      confirmPassword.valid
    ) {
      const user = {
        username: userName.value.trim().replace(/\s+/g, " "),
        email: email.value.toLowerCase().trim(),
        password: password.value,
      };
      axios
        .post("/public/signup", user)
        .then((res) => {
          if (res.data !== "FOUND" && res.data !== "BAD_REQUEST") {
            notify(
              "Your account has been registered, please login.",
              toast,
              "success"
            );
          }
        })
        .catch((error) => {
          if (error.response.data === "FOUND") {
            notify("User already exists.", toast, "info");
          }
        });
    } else {
      notify(
        "Check your email or username (at least 3 characters) or password (at least 8 characters with at least 1 uppercase letter, 1 lowercase letter and 1 number).",
        toast,
        "error"
      );
    }
  };
  const handleSignin = (e) => {
    e.preventDefault();
    setClickedSubmit((prevState) => prevState + 1);
    if (email.valid && password.valid) {
      const user = {
        email: email.value.toLowerCase().trim(),
        password: password.value,
      };
      axios.post("/public/signin", user).then((res) => {
        if (res.data !== "NOT_FOUND" && res.data !== "BAD_REQUEST") {
          console.log(res.data);
          //window.location.href = "/";
        } else if (res.data === "NOT_FOUND") {
          notify("The user does not exist.", toast, "info");
        }
      });
    } else {
      notify(
        "Check your email or password (at least 8 characters with at least 1 uppercase letter, 1 lowercase letter and 1 number).",
        toast,
        "error"
      );
    }
  };
  return (
    <>
      <ToastContainer />
      <Header />
      <div
        className='container'
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <div
          className={
            !isSignIn ? "container_auth right-panel-active" : "container_auth"
          }
          style={{ margin: "auto ", textAlign: "center" }}
          id='container'
        >
          <div className='form-container sign-up-container'>
            <form action='#'>
              <h1>Create Account</h1>
              <input
                type='text'
                placeholder='Username'
                value={userName.value}
                onChange={handleChangeUsername}
              />
              <input
                type='email'
                placeholder='Email'
                value={email.value}
                onChange={handleChangeEmail}
              />
              <input
                type='password'
                placeholder='Password'
                value={password.value}
                onChange={handleChangePassword}
              />
              <input
                type='password'
                placeholder='Confirme Password'
                value={confirmPassword.value}
                onChange={handleChangeConfirmPassword}
              />

              <button onClick={handleSignup}>Sign Up</button>
            </form>
          </div>
          <div className='form-container sign-in-container'>
            <form action='#'>
              <h1>Sign in</h1>

              <input
                type='email'
                placeholder='Email'
                value={email.value}
                onChange={handleChangeEmail}
              />
              <input
                type='password'
                placeholder='Password'
                value={password.value}
                onChange={handleChangePassword}
              />

              <a href='#'>Forgot your password?</a>
              <button onClick={handleSignin}>Sign In</button>
            </form>
          </div>
          <div className='overlay-container'>
            <div className='overlay'>
              <div className='overlay-panel overlay-left'>
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className='ghost' id='signIn' onClick={toogleAuth}>
                  Sign In
                </button>
              </div>
              <div className='overlay-panel overlay-right'>
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className='ghost' id='signUp' onClick={toogleAuth}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Authentication;
