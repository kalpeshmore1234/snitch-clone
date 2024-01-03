import React,{useState} from 'react'
import "./CreateAccount.css"
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom'

function CreateAccount() {
  
   const [firstName, setFirstName] = useState()
   const [lastName, setLastName] = useState()
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()
   const navigate = useNavigate()

   const handleSubmit = (e) =>{
         e.preventDefault()
         axios.post('http://snitchclone.netlify.app/register', {firstName, lastName, email, password})
         .then(result => {
            
            console.log(result)
            navigate("/login")
         })
         .catch(err => console.log(err))
   }


  return (
    <div className='create-account'>
            <div className="create-account-container">
                  <div className='create-block'><p>CREATE ACCOUNT</p></div>

                 <div className="outerr-input-block">
                      <div className="innerr-input-blocks">
                            
                          <div className="first-name-block blocks">
                             <label>FIRST NAME</label>
                             <input type="text" className='inputt' onChange={(e) => setFirstName(e.target.value)}/>
                          </div>  

                          <div className="last-name-block blocks">
                             <label>LAST NAME</label>
                             <input type="text" className='inputt' onChange={(e) => setLastName(e.target.value)}/>
                          </div>  

                          <div className="emaill-block blocks">
                             <label>EMAIL</label>
                             <input type="email" className='inputt' onChange={(e) => setEmail(e.target.value)}/>
                          </div>  

                          <div className="password-block blocks">
                             <label>PASSWORD</label>
                             <input type="password" className='inputt' onChange={(e) => setPassword(e.target.value)}/>
                          </div>  

                          <div className="create-btn-block">
                         <button className='create-btn' onClick={handleSubmit}>CREATE</button> 
                          </div>
                           
                      </div>
                 </div>
            </div>
    </div>
  )
}

export default CreateAccount