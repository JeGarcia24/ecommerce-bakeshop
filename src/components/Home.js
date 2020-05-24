import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div>
            <div className="home-container">
                <h1 className="tagLine">Good. Food. Every. Bite.</h1>
                <Link to="/shop" className="homeLink">Order Now!</Link>
            </div>
        </div>
    )
}

export default connect()(Home); // first (mapToStateProps, {action.js})(Shop)
