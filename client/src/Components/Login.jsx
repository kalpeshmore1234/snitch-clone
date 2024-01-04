import React, {useState} from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Login() {
  
 

  return (
    <div className="login">
    <div className='login-container'>

    <div className="title-block">
       <p className='login-title'>LOGIN</p>
    </div>

    
    <div className='outer-input-block'>
    <div className="input-blocks">
      
        <div className="email-block block">
            <label>EMAIL</label>
            <input type="email" className='input' />
        </div>

        <div className="password-block block">
            <label>PASSWORD</label>
            <input type="password" className='input' />
        </div>

       <div className="btn-block block" id="btn-block">
         <button className='btn-sign'>SIGN IN</button>
       </div>

       <Link to="/register" className='register-link'>
       <p className='create'>Create account</p>
       </Link>

  
     </div>
    </div>
    </div>
    </div>
  )
}

export default Login