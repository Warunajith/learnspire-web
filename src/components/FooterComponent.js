import React, { Component } from 'react';
import '../styles/FooterComponent.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


class FooterComponent extends Component {
    render() {
        return (
        <div id="footer">
        
        <div class="footer-area primary-bg pt-150">
            <div class="container">
                <div class="footer-top pb-35">
                    <div class="row">
                        
                        <div class="col-xl-6 col-lg-2 col-md-6">
                            <div class="footer-widget mb-30">
                                <div class="footer-heading">
                                    <h1>Quick Links</h1>
                                </div>
                                <div class="footer-menu clearfix">
                                    <ul>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Condition</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Consultation</a></li>
                                        <li><a href="#">Team Member</a></li>
                                        <li><a href="#">Our Services</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-xl-6 col-lg-2  col-md-6">
                            <div class="footer-widget mb-30">
                                <div class="footer-heading">
                                    <h1>Contact Us</h1>
                                </div>
                                <div class="footer-contact-list">
                                    <div class="single-footer-contact-info">
                                        <span class="ti-headphone "></span>
                                        <span class="footer-contact-list-text">+003 (1234) 7894</span>
                                    </div>
                                    <div class="single-footer-contact-info">
                                        <span class="ti-email "></span>
                                        <span class="footer-contact-list-text">youremail@gmail.com</span>
                                    </div>
                                    <div class="single-footer-contact-info">
                                        <span class="ti-location-pin"></span>
                                        <span class="footer-contact-list-text">123 New Street, 6th Floor, New York</span>
                                    </div>
                                </div>
                                <div class="opening-time">
                                    <span>Opening Hour</span>
                                    <span class="opening-date">
                                        Sun - Sat : 10:00 am - 05:00 pm
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='row'>
                    
                           <div className='socialMedia'>
                           <div >
                                    <h1>Social Media</h1>
                                </div>
                               <InstagramIcon /> 
                               <TwitterIcon /> 
                               <FacebookIcon />
                               <LinkedInIcon />
                           </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    
        
            </div>
        );
    }
}

export default FooterComponent;