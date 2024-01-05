import React from "react";
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



import "./App.css";

function App() {
 
 

  return (
   
    <Router>
   
      <div className='app'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/cartdisplay/:id' element={<CartDisplay />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CreateAccount />} />
        </Routes>

        <Footer />
        <StickyBar />
      </div>
    </Router>
 
  );
}

export default App;
