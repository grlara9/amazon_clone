import React from 'react'
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Header =()=>{
    return(
        <div className="header">
            <img className="header__logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
        </div>
    )
}
export default Header