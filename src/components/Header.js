import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import logo from '../images/logo.jpg'
import './Header.css'


const responsiveNavbar = () => {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function Header(props) {

    return (
        <div>
            <header>
                <div className="overlay"></div>
                <nav className="topnav" id="navbar">
                    <img className="logo" src={logo} alt="company-logo" />
                    <h1 className="company-name">Gourmet Bakery</h1>
                    <div className="navList">
                        <Link to="/" className="navLink">Home</Link>
                        <Link to="/about" className="navLink">About</Link>
                        <Link to="/shop" className="navLink">Shop</Link>
                        <Link to="/cart" className="navLink">
                            <ion-icon name="cart-outline"></ion-icon>Cart<span className="navQuantity">
                                {props.cartProps.cartNumber}</span></Link>
                    </div>
                    <button className="menu" type="button" onClick={responsiveNavbar}>
                        <span class="menu-line"></span>
                    </button>
                </nav>        
            </header>
        </div>
    )
};

const mapStateToProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateToProps, null)(Header); // first (mapToStateProps, {action.js})(Header)
