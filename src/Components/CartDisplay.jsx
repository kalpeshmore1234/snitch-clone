import React from "react";
import "./CartDisplay.css";
import { useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart} from "../features/cartSlice";
import { useState } from "react";



function CartDisplay() {

  const items = useSelector((state) => state.allCart.items)



  // for displaying products
  const { id } = useParams();
  const selectedItemss = items.find((item) => item.id === parseInt(id, 10));

  const dispatch = useDispatch();

 
  

  return (
    <div className="cartdisplay">
      {selectedItemss ? (
        <div className="cartdisplay-block" key={selectedItemss.id}>
          <div className="cartdisplay-img-block">
            <img src={selectedItemss.img} alt="" />
          </div>

          <div className="cartdisplay-title-block">
            <p className="title-para">{selectedItemss.title}</p>
            <p className="price">Rs. {selectedItemss.price}</p>
            <p className="price-para">(incl. of all taxes)</p>

            <hr />


            <div className="offers">
                 <div className="offer">
                    <div className="logo">
                        <img src="https://www.snitch.co.in/cdn/shop/files/offer_icon-1_20x.png?v=1615371278/" alt="" />
                    </div>

                    <div className="descriptions" id="description1">
                      <p className="code">Use Code: <b>SLEIGH</b></p>
                      <p className="des">Flat 25% off on minimum order value of Rs.2599/- Limited Period Offer</p>
                    </div>
                 </div>

                 <div className="offer">
                    <div className="logo">
                        <img src="https://www.snitch.co.in/cdn/shop/files/offer_icon-1_20x.png?v=1615371278/" alt="" />
                    </div>

                    <div className="descriptions" id="description2">
                      <p className="code">Use Code: <b>GET15</b></p>
                      <p className="des">On minimum order value of Rs. 1999/- </p>
                    </div>
                 </div>

                 <div className="offer">
                    <div className="logo">
                        <img src="https://www.snitch.co.in/cdn/shop/files/offer_icon-1_20x.png?v=1615371278/" alt="" />
                    </div>

                    <div className="descriptions" id="description3">
                      <p className="code">Use Code: <b>GET10</b></p>
                      <p className="des">On minimum order value of Rs. 1499/- </p>
                    </div>
                 </div>
            </div>

           
            
           
             <button className="btn" onClick={() => dispatch(addToCart(selectedItemss))}>ADD TO CART</button>
          
               
          </div>
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
}

export default CartDisplay;
