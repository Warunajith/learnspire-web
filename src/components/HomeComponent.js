import React from 'react'
import { Link  } from 'react-router-dom';
import FrontImage from '../assets/frontImage.jpg'
import '../styles/HomeComponent.css'

export default function HomeComponent() {

  return (
    <div className='home' style={{ backgroundImage: `url(${FrontImage})` }}>
      
    <div className='header'>
        <h1> Learning Managment System </h1>
        
        <div>
            <br></br>
            <Link to={`/signup`} style={{marginRight:"20px" ,marginLeft:"500px"}}>
              <button className='signup'>SignUp</button>
            </Link>
            
            <Link to={`/signin`} style={{marginRight:"" ,marginLeft:"50px"}}>
              <button className='login'>
              Login
              </button>
            </Link>


        </div>
    </div>
      
    </div>
  );



  
}

