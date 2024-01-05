import React,{useState} from 'react'
import "./CreateAccount.css"
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom'

function CreateAccount() {
  
   

  return (
    <div className='create-account'>
            <div className="create-account-container">
                  <div className='create-block'><p>CREATE ACCOUNT</p></div>

                 <div className="outerr-input-block">
                      <div className="innerr-input-blocks">
                            
                          <div className="first-name-block blocks">
                             <label>FIRST NAME</label>
                             <input type="text" className='inputt' />
                          </div>  

                          <div className="last-name-block blocks">
                             <label>LAST NAME</label>
                             <input type="text" className='inputt' />
                          </div>  

                          <div className="emaill-block blocks">
                             <label>EMAIL</label>
                             <input type="email" className='inputt' />
                          </div>  

                          <div className="password-block blocks">
                             <label>PASSWORD</label>
                             <input type="password" className='inputt' />
                          </div>  

                          <div className="create-btn-block">
                         <button className='create-btn' >CREATE</button> 
                          </div>
                           
                      </div>
                 </div>
            </div>
    </div>
  )
}

export default CreateAccount