import React from 'react'
import {Link } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import {useStateValue} from './StateProvider'
import './payment.css'
import { useStripe, useElements, CardElement} from '@stripe/react-stripe-js'

const Payment = ()=>{
    const [{basket, user}, dispatch]= useStateValue();

    const stripe = useStripe();
    const elememts = useElements();

    const handleSubmit =()=>{

    }
    return(
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout (<Link to="/checkout">{basket.length} items</Link>)</h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>515 Paulin ave</p>
                        <p>Calexico, CA</p>
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
                                <form onSubmit={handleSubmit}>
                                    <CardElement onChange={handleChange}/>
                                </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Payment