import React from 'react'
import './CheckoutProduct.css'

const CheckoutProduct = ({id, title, price, image, rating, hideButton})=>{
    return(
        <div className="checkoutproduct">
            <img className="checkoutproduct__image" src={image} />
        <div className="checkoutproduct__info">
            <p className="checkoutproduct__title">{title}</p>
            <p className="checkoutproduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
        <div className="checkoutproduct__rating">
            {Array(rating)
                .fill().map((_, i)=>(
                    <p>*</p>
                )
            )
        }
        </div>
        <button>Remove from Basket</button>
        </div>

        </div>
    )
}
export default CheckoutProduct