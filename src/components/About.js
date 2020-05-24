import React from 'react'
import { connect } from 'react-redux';
import aboutImage from '../images/about.jpg'
import './About.css'

function About() {
    return (
        <div>
            <div className="about-container">
                <div className="overlay"></div>
                <div className="about-content-container">
                    <img src={aboutImage} />
                    <p className="about-details">Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. 
                        Fusce id quam ut lectus pretium fringilla. 
                        Nam hendrerit luctus sapien, vel mattis mauris facilisis ut. 
                        In hac habitasse platea dictumst. Vestibulum porttitor lobortis eros, 
                        vel commodo magna blandit et. Nulla a turpis commodo, volutpat tortor a, 
                        lobortis dolor. Nulla posuere posuere lacus, id cursus tortor cursus quis. 
                        Nullam tempor ligula quis blandit aliquam. Praesent pretium turpis nisi, 
                        id tincidunt turpis posuere eget. Nam eu magna velit. Sed eget fermentum nisl, 
                        quis imperdiet augue. Cras nunc mauris, finibus ut lectus sit amet, 
                        sollicitudin interdum orci. Nulla tempus varius massa sit amet viverra.</p>
                </div>
            </div>
        </div>
    )
}

export default connect(null, null)(About); // first (mapToStateProps, {action.js})(About)
