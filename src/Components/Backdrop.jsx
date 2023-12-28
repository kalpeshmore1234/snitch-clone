import React from 'react'
import "./Cart.css"

function Backdrop({open, setOpen}) {
  return (
    <div className={!open ? "backdrop" : "backdrop show"}></div>
  )
}

export default Backdrop