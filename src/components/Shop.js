import React from 'react'
import { connect } from 'react-redux'; //to connect
import './Shop.css';

//import actions
import { addCart } from '../actions/addCartProduct';

//import product photos
import item1 from '../images/bagels.jpg';
import item2 from '../images/blueberryCupcake.jpg';
import item3 from '../images/chocolateCake.jpg';
import item4 from '../images/chocolateChipCookie.jpg';
import item5 from '../images/chocolateMuffin.jpg';
import item6 from '../images/cinnamonRoll.jpg';
import item7 from '../images/croissant.jpg';
import item8 from '../images/doughnuts.jpg';
import item9 from '../images/frenchBread.jpg';
import item10 from '../images/garlicBread.jpg';
import item11 from '../images/redVelvetCupcake.jpg';
import item12 from '../images/strawberryCake.jpg';
import item13 from '../images/strawberryCheesecake.jpg';
import item14 from '../images/strawberryPie.jpg';
import item15 from '../images/toast.jpg';
import item16 from '../images/wheatBread.jpg';


function Shop(props) {
    return (
        <div className="shop-container">
            <div className="overlay"></div>
            <div className="all-product-container">
                <div className="myProduct">
                    <img src={item1}/>
                    <h3 className="shop-product-title">Bagels</h3>
                    <h3 className="shop-price">Php 45</h3>
                    <a onClick={() => props.addCart("item1")} href="#" className="addToCartLink">Add to Cart</a>
                </div>
                <div className="myProduct">
                    <img src={item2}/>
                    <h3 className="shop-product-title">Blueberry Cupcake</h3>
                    <h3 className="shop-price">Php 65</h3>
                    <a onClick={() => props.addCart("item2")} href="#" className="addToCartLink">Add to Cart</a>
                </div>
                <div className="myProduct">
                    <img src={item3}/>
                    <h3 className="shop-product-title">Chocolate Cake</h3>
                    <h3 className="shop-price">Php 780</h3>
                    <a onClick={() => props.addCart("item3")} href="#" className="addToCartLink">Add to Cart</a>
                </div>
                <div className="myProduct">
                    <img src={item4}/>
                    <h3 className="shop-product-title">Chocolate Chips Cookie</h3>
                    <h3 className="shop-price">Php 45</h3>
                    <a onClick={() => props.addCart("item4")} href="#" className="addToCartLink">Add to Cart</a>
                </div>
                <div className="myProduct">
                    <img src={item5}/>
                    <h3 className="shop-product-title">Chocolate Muffin</h3>
                    <h3 className="shop-price">Php 65</h3>
                    <a onClick={() => props.addCart("item5")} href="#" className="addToCartLink">Add to Cart</a>
                </div>
                <div className="myProduct">
                    <img src={item6}/>
                    <h3 className="shop-product-title">Cinnamon Roll</h3>
                    <h3 className="shop-price">Php 75</h3>
                    <a onClick={() => props.addCart("item6")} href="#" className="addToCartLink">Add to Cart</a>
                </div>
                <div className="myProduct">
                    <img src={item7}/>
                    <h3 className="shop-product-title">Croissant</h3>
                    <h3 className="shop-price">Php 50</h3>
                    <a onClick={() => props.addCart("item7")} href="#" className="addToCartLink">Add to Cart</a>
                </div>
                <div className="myProduct">
                    <img src={item8}/>
                    <h3 className="shop-product-title">Doughnut</h3>
                    <h3 className="shop-price">Php 35</h3>
                    <a onClick={() => props.addCart("item8")} href="#" className="addToCartLink">Add to Cart</a>
                </div>
                <div className="myProduct">
                    <img src={item9}/>
                    <h3 className="shop-product-title">French Bread</h3>
                    <h3 className="shop-price">Php 120</h3>
                    <a onClick={() => props.addCart("item9")} href="#" className="addToCartLink">Add to Cart</a>
                </div>
                <div className="myProduct">
                    <img src={item10}/>
                    <h3 className="shop-product-title">Garlic Bread</h3>
                    <h3 className="shop-price">Php 75</h3>
                    <a onClick={() => props.addCart("item10")} href="#" className="addToCartLink">Add to Cart</a>
                </div>
                <div className="myProduct">
                    <img src={item11}/>
                    <h3 className="shop-product-title">Red Velvet Cupcake</h3>
                    <h3 className="shop-price">Php 75</h3>
                    <a onClick={() => props.addCart("item11")} href="#" className="addToCartLink">Add to Cart</a>
                </div>
                <div className="myProduct">
                    <img src={item12}/>
                    <h3 className="shop-product-title">Strawberry Cake</h3>
                    <h3 className="shop-price">Php 850</h3>
                    <a onClick={() => props.addCart("item12")} href="#" className="addToCartLink">Add to Cart</a>
                </div>
                <div className="myProduct">
                    <img src={item13}/>
                    <h3 className="shop-product-title">Strawberry Cheesecake</h3>
                    <h3 className="shop-price">Php 75</h3>
                    <a onClick={() => props.addCart("item13")} href="#" className="addToCartLink">Add to Cart</a>
                </div>
                <div className="myProduct">
                    <img src={item14}/>
                    <h3 className="shop-product-title">Strawberry Pie</h3>
                    <h3 className="shop-price">Php 545</h3>
                    <a onClick={() => props.addCart("item14")} href="#" className="addToCartLink">Add to Cart</a>
                </div>
                <div className="myProduct">
                    <img src={item15}/>
                    <h3 className="shop-product-title">Toast with Egg</h3>
                    <h3 className="shop-price">Php 75</h3>
                    <a onClick={() => props.addCart("item15")} href="#" className="addToCartLink">Add to Cart</a>
                </div>
                <div className="myProduct">
                    <img src={item16}/>
                    <h3 className="shop-product-title">Wheat Bread</h3>
                    <h3 className="shop-price">Php 150</h3>
                    <a onClick={() => props.addCart("item16")} href="#" className="addToCartLink">Add to Cart</a>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { addCart })(Shop); // first (mapToStateProps, {action.js})(Shop)

