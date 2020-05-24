import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import './Cart.css';

//import actions
import { productQuantity } from '../actions/productQuantity';
import { clearProduct } from '../actions/clearProduct';

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

function Cart({cartProps, productQuantity, clearProduct}) { 
    
    let productsInCart = [];

    Object.keys(cartProps.products).forEach(function(item){
        
        if(cartProps.products[item].inCart){
            productsInCart.push(cartProps.products[item])
        }
    });

    //const productImages
    const productImages = (product) => {
        if(product.tagName === "item1"){
            return item1
        }else if(product.tagName === "item2"){
            return item2
        }else if(product.tagName === "item3"){
            return item3
        }else if(product.tagName === "item4"){
            return item4
        }else if(product.tagName === "item5"){
            return item5
        }else if(product.tagName === "item6"){
            return item6
        }else if(product.tagName === "item7"){
            return item7
        }else if(product.tagName === "item8"){
            return item8
        }else if(product.tagName === "item9"){
            return item9
        }else if(product.tagName === "item10"){
            return item10
        }else if(product.tagName === "item11"){
            return item11
        }else if(product.tagName === "item12"){
            return item12
        }else if(product.tagName === "item13"){
            return item13
        }else if(product.tagName === "item14"){
            return item14
        }else if(product.tagName === "item15"){
            return item15
        }else{
            return item16
        }
    }

    productsInCart = productsInCart.map((product, index) => {
        return(
            <Fragment key={index}>
                <div className="product">
                    <i onClick={() => clearProduct(product.tagName)} class="fa fa-times-circle"></i>
                    <img src={productImages(product)}/>
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">Php{product.price}</div>
                <div className="quantity">
                    <i onClick={() => productQuantity("decrease", product.tagName)} className="fa fa-minus decrease"></i>
                    <span className="itemQuantity">{product.numbers}</span>
                    <i onClick={() => productQuantity("increase", product.tagName)} className="fa fa-plus increase"></i>
                </div>
                <div className="total">Php{product.numbers * product.price}</div>
            </Fragment>
        )
    })

    return (
        <div className="cart-container">
            <div className="content-container">
                <div className="cart-product-container">
                    <div className="product-header">
                        <h5 className="product-title">PRODUCT</h5>
                        <h5 className="price sm-hide">PRICE</h5>
                        <h5 className="quantity">QUANTITY</h5>
                        <h5 className="total">TOTAL</h5>
                    </div>
                    <div className="products">
                        { productsInCart }
                    </div>
                    <div className="cartTotalContainer">
                        <div className="totalQuantity">
                            <h4 className="cartTotalTitle">Total Quantity</h4>
                            <h4 className="cartTotal">{cartProps.cartNumber}</h4>
                        </div>
                        <div className="totalPrice">
                            <h4 className="cartTotalTitle">Total Price</h4>
                            <h4 className="cartTotal">Php {cartProps.cartCost}</h4>
                        </div>
                    </div>
                </div>
                <div className="payment-section">
                    <h3 className="payment-title">Card Details</h3>
                    <div className="cards">
                        <h4>Card Type</h4>
                        <span><i class="fa fa-cc-visa fa-2x"></i></span>
                        <span><i class="fa fa-cc-mastercard fa-2x"></i></span>
                        <span><i class="fa fa-cc-discover fa-2x"></i></span>
                        <span><i class="fa fa-cc-amex fa-2x"></i></span>
                    </div>
                    <form className="card-details">
                        <div className="card-info">
                            <p>Name on Card</p> 
                            <input required></input>
                        </div>
                        <div className="card-info" id="card-number">
                            <p>Card Number</p> 
                            <input required></input><span>-</span>
                            <input required></input><span>-</span>
                            <input required></input><span>-</span>
                            <input required></input>
                        </div>
                        <div className="card-info" id="expiry-date">
                            <p>Expiry Date</p> 
                            <input required></input><span>/</span>
                            <input required></input><span>/</span>
                            <input required></input>
                        </div>
                        <div className="card-info" id="cvv">
                            <p>CVV</p> 
                            <input required></input>
                        </div>
                        <button className="purchase-button" type="submit">Complete Purchase</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateToProps, {productQuantity, clearProduct})(Cart);
