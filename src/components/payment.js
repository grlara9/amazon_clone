import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import './payment.css'
import {useStateValue} from './StateProvider'

const Payment = ()=>{
    const [{basket, user}, dispatch]= useStateValue();

    return(
        <div className="payment">
            <div className="payment__container">
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                    </div>

                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and deliveries</h3>
                    </div>
                        <div className="payment__items">
                            {basket.map(item=>(
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>payment method</h3>
                    </div>
                    <div className="payment__details">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Payment