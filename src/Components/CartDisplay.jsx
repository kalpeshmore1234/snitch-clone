import React from "react";
import "./CartDisplay.css";
import products from "./ProductsData";
import { useParams } from "react-router-dom";

function CartDisplay() {
  const { id } = useParams();

  const selectedItems = products.find((item) => item.id === parseInt(id, 10));

  return (
    <div className="cartdisplay">
      {selectedItems ? (
        <div className="cartdisplay-block">
          <div className="cartdisplay-img-block">
            <img src={selectedItems.img} alt="" />
          </div>

          <div className="cartdisplay-title-block">
            <p className="title-para">{selectedItems.title}</p>
            <p className="price">Rs. {selectedItems.price}</p>
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

            <div className="quantity-block">
              <p>QUANTITY</p>

              <div className="button-block">
                <div className="minus">-</div>
                <div className="val">1</div>
                <div className="plus">+</div>
              </div>
            </div>

            <button className="btn">ADD TO CART</button>
          </div>
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
}

export default CartDisplay;
