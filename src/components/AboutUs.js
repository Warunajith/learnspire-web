import React, { Component } from 'react';
import HomeImage from '../assets/homeimage.jpg'
import '../styles/AboutUs.css'

class AboutUs extends Component {
    render() {
        return (
            <div>
                <h1>About Us</h1>
                <div >
                <div className='home' style={{ backgroundImage: `url(${HomeImage})` }}></div>
                </div>
                <div><p>This is the learning management system for ABC university.</p></div>

                <div><h3>Faculty of science</h3>
                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>
                <div><h3>Faculty of arts</h3>
                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p></div>
                <div><h3>Faculty of commerce</h3>
                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p></div>
                
            </div>
        );
    }
}

export default AboutUs;