import React, {useState, useEffect} from 'react'
import {Link, useHistory } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import {useStateValue} from './StateProvider'
import './payment.css'
import { useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import {getBasketTotal} from './reducer'
import CurrencyFormat from 'react-currency-format'
import axios from './axios'


const Payment = ()=>{
    const [{basket, user}, dispatch]= useStateValue();
    const history =useHistory();
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState(true)
    
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing]= useState("")
    const [error, setError] = useState('null');
    const [disabled, setDisabled] = useState(true)

    useEffect(()=>{
     //generate special stripe secret allows us to charge the user
     const getClientSecret = async () => {
         const response = await axios({
             method: 'post',
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
         });
         setClientSecret(response.data.getClientSecret)
     }
     getClientSecret();
    }, [basket])

console.log("The ssecret is>>>>>", clientSecret)
    const handleSubmit = async (event) =>{
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

          

            setSucceeded(true);
            setError(null)
            setProcessing(false)
            history.replace('/orders')
        })
    }

    const handleChange = event =>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message: '');
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
                                <div className="payment__container">
                                    <CurrencyFormat 
                                        renderText={(value)=>(
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing ||disabled || succeeded}>
                                        <span>{processing? <p>Processing</p>: "Buy Now"}</span>
                                    </button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Payment