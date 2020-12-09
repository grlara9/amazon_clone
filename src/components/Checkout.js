import React from 'react'
import Subtotal from "./Subtotal";
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'

const Checkout =()=>{

    const [{basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"  src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
            
                <div>
                    <h2 className="checkout__title">your shopping basket</h2>

                    <CheckoutProduct 
                            id='12345'
                            title='arriva mis pumas bolas de vergas ptos hhoho'
                            image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
                            price={199.99}
                            rating={4}
                        />

<CheckoutProduct 
                            id='12345'
                            title='arriva mis pumas bolas de vergas ptos hhoho'
                            image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
                            price={199.99}
                            rating={4}
                        />
                        {basket.map(item => (
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
                <div className="checkout__right"><Subtotal /></div>
        </div>
    )
}
export default Checkout