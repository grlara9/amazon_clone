import React from 'react'

import './Product.css'

const Product =()=>{
    return(
        <div className="product">
            <div className="product__info">
                <p>Title</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    
                </div>
            </div>
            <img src="" alt=""/>
            <button>Add to basket</button>
        </div>
    );
}
export default Product