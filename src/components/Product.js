import React from 'react'
import './Product.css'

const Product =({id, title, price, image})=>{
    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    
                </div>
            </div>
            <img src={image} alt=""/>
            <button>Add to basket</button>
        </div>
    );
}
export default Product