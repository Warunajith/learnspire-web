import React from 'react'
import UserService from '../services/UserService';
import { Link ,useParams,useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import Navbar from './Navbar';
import FooterComponent from './FooterComponent';

export default function StudentViewComponent() {


  
  
  
  return (
    <div>

<Navbar></Navbar>
      <h1>Welcome Student view Page</h1>
      
      <Link className="btn btn-info" to="/availablecourses" style={{marginRight:"20px",marginLeft:"15px"}}>Available Courses</Link>
      <Link className="btn btn-info" to="/enrolledcourses">Enrolled  Courses</Link>
      <Link className="btn btn-info" to="/viewresults" style={{marginRight:"20px",marginLeft:"15px"}}>View Results</Link>
      
<FooterComponent></FooterComponent>      
    </div>
  )
}
