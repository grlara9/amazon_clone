import React from 'react';

import Product from './Product'
import './Home.css'

const Home = ()=>{

   
    return(
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NDRiMzY4NTIt/NDRiMzY4NTIt-YTI0MDc5OWMt-w1500._CB659183649_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product 
                        id="12321341"
                        title="Funko Pop! Animation: Dragonball Z - Mecha Frieza, Multicolor"
                        price={8.95}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51y0Soq8oyL._AC_SL1000_.jpg"
                    />
                    <Product 
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product 
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product 
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="45678678"
                        title="Funko Pop Animation Dragonball Orange Suit Goku and Flying Nimbus Exclusive Vinyl Figure"
                        price={29.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71fg2-G%2Bv1L._AC_SL1325_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}
export default Home