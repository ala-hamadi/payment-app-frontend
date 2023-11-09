import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Authentication.css";

const Authentication = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toogleAuth = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <>
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
              <input type='text' placeholder='Name' />
              <input type='email' placeholder='Email' />
              <input type='password' placeholder='Password' />
              <button>Sign Up</button>
            </form>
          </div>
          <div className='form-container sign-in-container'>
            <form action='#'>
              <h1>Sign in</h1>
              <input type='email' placeholder='Email' />
              <input type='password' placeholder='Password' />
              <a href='#'>Forgot your password?</a>
              <button>Sign In</button>
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
