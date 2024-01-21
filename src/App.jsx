import React, {useEffect, useState} from "react";
import Header from "./Components/Headerr";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import CartDisplay from "./Components/CartDisplay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Components/Cart.css"
import "./Components/Headerr.css"
import Login from "./Components/Login";
import CreateAccount from "./Components/CreateAccount";
import StickyBar from "./Components/StickyBar";
import Profile from "./Components/Profile";
import {auth} from "./Components/firebase"


import "./App.css";

function App() {

  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
 
 
 useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        setUserName(user.displayName)
        setEmail(user.email)
        console.log(user)
      }else{
        setUserName("")
      }
      console.log(user)
    })
 }, [])

  return (
   
    <Router>
   
      <div className='app'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/cartdisplay/:id' element={<CartDisplay />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/profile" element={<Profile name={userName} email={email}/>} />

        </Routes>

        <Footer />
        <StickyBar />
      </div>
    </Router>
 
  );
}

export default App;
