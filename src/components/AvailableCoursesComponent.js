import React from 'react'
import UserService from '../services/UserService';
import { useState,useEffect } from 'react';
import '../styles/AvailableCoursesComponent.css'
import { Link  } from 'react-router-dom';
import MobileApplicationDevelopment from '../assets/mobileappdevelopment.jfif';
import SoftwareArchitecture from '../assets/softwarearchitecture.jfif';
import { Button } from 'bootstrap';

export default function AvailableCoursesComponenet() {

const [availablelCourses,setAvailablelCourses]=useState([])

  useEffect(() => {

    getAvailablelCourses() }, []);


const getAvailablelCourses=()=>{

  UserService.getAvlCourses().then(res=>{

    setAvailablelCourses(res.data);
    console.log(res.data);

  }).catch(error =>{
    console.log(error);
}) 


}

const enroll=(id)=>{
  UserService.addUserToCourse(id);
  getAvailablelCourses();
}



  return (
    <div>

<div className="title"><h1>Available Courses</h1></div>  

          <div className="row">
          
          {
          
          availablelCourses.map(
                course=>
                                    
          <div class="card col-3">
                        <div class="courses ">
                            <div class="courses-thumb">
                                <a ><img src={MobileApplicationDevelopment} /></a>
                            </div>
                            
                            <div class="course-main-content clearfix">
                                <div class="courses-content">
                                    
                                    <div class="courses-heading">
                                      <h6>{course.name}</h6>
                                      
                                      <button style={{marginRight:"",marginLeft:"80px"}} className="btn btn-danger" onClick={()=>enroll(course.id)}>Enroll</button>
                                      
                                    </div>
                                    
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
           )
          }
        </div>  
    </div>
  )
}
