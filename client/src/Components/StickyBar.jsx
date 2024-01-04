import React from 'react'
import "./StickyBar.css"
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

function StickyBar() {
  return (
    <div className="sticky-bar">
        
        <Link to="/login" id="person-link">
          <PersonIcon /> 
          Account
        </Link>
       
  
       
    </div>
  )
}

export default StickyBar