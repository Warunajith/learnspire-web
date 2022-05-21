import React, { Component } from 'react';
import HomeImage from '../assets/homeimage.jpg'
import '../styles/AboutUs.css'

class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className='title'><h1>About Us</h1></div>
                
                <div >
                <div className='home' style={{ backgroundImage: `url(${HomeImage})` }}></div>
                </div>
                

                <div className='card' style={{height:"100px", width:"1100px"}}><h3>Faculty of science</h3>
                </div>
                <div className='card' style={{height:"100px", width:"1100px"}}><h3>Faculty of arts</h3>
                </div>
                <div className='card' style={{height:"100px", width:"1100px"}}><h3>Faculty of commerce</h3>
                </div>
                
            </div>
        );
    }
}

export default AboutUs;