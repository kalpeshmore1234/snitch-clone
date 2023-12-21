import React from 'react'
import products from './ProductsData'
import "./Home.css"
import { Link } from 'react-router-dom'
import Background from './Background'





function Home() {
  
  return (
     <>
     <Background />
    <div className='product'>
        <div className='title-blockk'>
            <p>NEW DROPS</p>
        </div>

        <div className="outer-product-block">
        {
          
            products.map((product) => {
                return(
                    <>
                    <Link to={`/cartdisplay/${product.id}`} style={{textDecoration:'none', color:"black"}} >
                
                    <div className='product-block' key={product.id} onClick={() => SingleProduct(product.id)}>
                      <div className="product-img-block" >
                          <img src={product.img} alt=""/>
                      </div>
                       
                       <p className="product-title" id="product-title">{product.title}</p>
                       <p className="product-price" id="product-price">Rs.{product.price}</p>
                     </div>
                  
                     </Link> 
                    </>
                       
                )
               
            }
              
            )
        }
        </div>
       
    </div>
    </>
  )
  
}

export default Home