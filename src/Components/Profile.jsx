import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  signOut } from "firebase/auth";
import { auth } from './firebase';
import "./Login.css"
import InputControl from './InputControl';

function Profile(props) {

  const navigate = useNavigate()
  
  const handleLogOut = (e) =>{
     e.preventDefault();
     auth.signOut().then(() => {
         console.log("user signed out")
     })
      navigate("/")
  }

  return (
    <>
        {
            props.name && props.email ?
            (
                <div className="login">
        {/* <h2>{props.name && props.email ? `Welcome ${props.name} ${props.email}` : "Login please"}</h2>
        <button onClick={handleLogOut}>sign out</button> */}
        <div className="login-container">
            <div className="title-block">
                  <p className="login-title">
                    Welcome {props.name}
                  </p>
            </div>

            <div className="outer-input-block">
                <div className="input-blocks">
                     <div className="email-block block">
                            <InputControl label="EMAIL"
                className="input" placeholder = {props.email} disabled/>
                     </div>

             <div className="btn-block block" id="btn-block">
              <button className="btn-sign" onClick={handleLogOut}>
                SIGN OUT
              </button>

            </div>   
                </div>
            </div>
        </div>
    </div>
            ):
            (
                <div className="profile">
                  <p className='profile-title'>Login please</p>
                </div>
              
            )
        }
    </>
   
  )
}

export default Profile