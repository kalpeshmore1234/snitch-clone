// Cart.js

import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal,  increaseItemQuantity, decreaseItemQuantity,  removeItem } from '../features/cartSlice';
import { useEffect } from 'react';
import "./Cart.css"
import CloseIcon from '@mui/icons-material/Close'
import Backdrop from './Backdrop';





function Cart({open, setOpen}) {
 
  
  const {cart, totalQuantity, totalPrice} = useSelector((state) => state.allCart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartTotal())
  }, [cart])

  


  return (
    <>
    <Backdrop />
    <div className= {!open ? "cart" : "cart open"}  id="cart">

    <div className="cart1">
    <div id="title-block">
      <div className="title-block-inner">
          <p className='cart-title'>CART</p>
      </div>
      
       <div className="closeicon-block">
          <CloseIcon id="close" onClick={() => setOpen(!open)}/>
       </div>
      
    </div>
  
      {cart.length === 0 ? (
        <p className='empty'>Your cart is currently empty.</p>
      ) : (
        <div className='cart-content'>
            {cart.map((item, index) => (
              (
                <div className='item-block'>
                     <div className="item-img-block">
                          <img src={item.img} alt="" className="item-img" />
                     </div>

                     <div className="item-des-block">
                           <p className="item-title" id="item-title">{item.title}</p>

                           <div className="btn-container">
                               
                               <div className="btn-block">
                                     <span className='operators increment' onClick={() => dispatch(increaseItemQuantity(item.id))}>+</span>
                                     <span className='qty-span'>{item.qty}</span>
                                     <span className='operators decrement' onClick={() => dispatch(item.qty > 1? decreaseItemQuantity(item.id): removeItem(item.id))}>-</span>
                               </div>

                               <p>Rs.{item.price}</p>
                           </div>
                     </div>
                </div>
            
                )
            ))}
        </div>
      )}
    </div>


    <div className="subtotal " id="subtotal">
         <div className="subtotal-block">
            <span id="total">SUBTOTAL</span>
            <span id="totalPrice">Rs.{totalPrice}</span>
         </div>

         <p id="last-para">Shipping, taxes, and discount codes calculated at checkout.</p>
    </div>
    </div>

</>
   


   
  );
  
}

export default Cart
