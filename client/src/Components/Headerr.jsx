import React from 'react'
import "./Headerr.css"
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Link } from 'react-router-dom';
import "./Cart.css"
import { useState } from 'react';
import Cart from './Cart';
import Backdrop from './Backdrop';





function Header() {

  
 const[open, setOpen] = useState(false)

 


 function handleOpen(){
  setOpen(!open)
 }
  return (
   <>
  
    <div className='header' >
    <Backdrop open={open} setOpen={setOpen} className={open ? "backdrop" : "backdrop"}/>
    <Cart open={open} setOpen={setOpen} className={open ? "cart" : "cart"}/>

      <div className="header1-block">
            <div className="offer-block">25% OFF ON OR ABOVE 2599/- SITEWIDE USE CODE SLEIGH</div>
           
           <div className="second-block">
             <div className="nav-block">
                  
                  <div className="menu-block">
                     <MenuIcon className="menu-icon"  />
                  </div>
                 
                 
                
                <Link to="/">
               <div className="title-block">
               <img src="https://www.snitch.co.in/cdn/shop/files/blackoption.png?v=1659016547" alt="title-img" />
               </div></Link>
              
           
               <div className="icon-block">
               <Link to="/login" id='login-link'>
                  <PersonIcon className='icon' id="person-icon"/>
               </Link>
                
                 <SearchIcon className='icon' id="search-icon" />
                 <FavoriteIcon className='icon' id="favorite-icon"/>
             <ShoppingBagIcon className='icon' id="cart-icon" onClick={handleOpen}/>           
                 <PhotoCameraIcon className='icon' id="camera-icon"/>
               </div>
              
             
        
                
            </div>
           </div>
            
        </div>
    </div>
    </>
 
   
  )
}

export default Header