import React from "react";
import Header from "./Components/Headerr";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import CartDisplay from "./Components/CartDisplay";
import Cart from "./Components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import "./App.css";

function App() {



  return (
   
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/cartdisplay/:id' element={<CartDisplay />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

        <Footer />
      </div>
    </Router>
 
  );
}

export default App;
