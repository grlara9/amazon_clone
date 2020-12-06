import React from 'react'
import './CheckoutProduct.css'

const CheckoutProduct = (props)=>{
    return(
        <div className="checkoutproduct">
            <img className="checkoutproduct__image" 
            src={props.image}
            />

        </div>
    )
}
export default CheckoutProduct