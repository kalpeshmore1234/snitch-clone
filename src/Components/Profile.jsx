import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  signOut } from "firebase/auth";
import { auth } from './firebase';
import "./Profile.css"
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
                <div className="profile">
        {/* <h2>{props.name && props.email ? `Welcome ${props.name} ${props.email}` : "Login please"}</h2>
        <button onClick={handleLogOut}>sign out</button> */}
        <div className="profile-container">
            <div className="profile-title-block">
                  <p className="profile-title">
                    Welcome {props.name}
                  </p>
            </div>

            <div className="profile-outer-input-block">
                <div className="profile-input-blocks">
                     <div className="profile-email-block profile-block">
                            <InputControl label="EMAIL"
                className="profile-input" placeholder = {props.email} disabled/>
                     </div>

             <div className="profile-btn-block profile-block" id="profile-btn-block">
              <button className="profile-btn-signOut" onClick={handleLogOut}>
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