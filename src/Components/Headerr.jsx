import React from 'react'
import "./Headerr.css"
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Link } from 'react-router-dom';

function header() {
  return (
    <div className='header'>

      <div className="header1-block">
            <div className="offer-block">25% OFF ON OR ABOVE 2599/- SITEWIDE USE CODE SLEIGH</div>
           
           <div className="second-block">
             <div className="nav-block">
                  
                  <div className="menu-block">
                     <MenuIcon className="menu-icon"/>
                  </div>
                 
                 
                
                <Link to="/">
               <div className="title-block">
               <img src="https://www.snitch.co.in/cdn/shop/files/blackoption.png?v=1659016547" alt="title-img" />
               </div></Link>
              
           
               <div className="icon-block">
                 <PersonIcon className='icon icon-1' id="person-icon"/>
                 <SearchIcon className='icon' id="search-icon" />
                 <FavoriteIcon className='icon' id="favorite-icon"/>
                 <Link to="/cart"> <ShoppingBagIcon className='icon cart-icon' id="cart-icon"/></Link>               
                 <PhotoCameraIcon className='icon' id="camera-icon"/>
               </div>
              
             
        
                
            </div>
           </div>
            
        </div>
    </div>
  )
}

export default header