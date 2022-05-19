import React from 'react'
import UserService from '../services/UserService';
import { useState,useEffect } from 'react';
import { Link ,useParams,useNavigate} from 'react-router-dom';
import '../styles/EnrolledCoursesComponent.css'
import MobileApplicationDevelopment from '../assets/mobileappdevelopment.jfif';
import SoftwareArchitecture from '../assets/softwarearchitecture.jfif';

export default function EnrolledCoursesComponent() {

    const [enrolledCourses,setEnrolledCourses]=useState([])
    const [marks,setMarks]=useState([])

  useEffect(() => {

    getEnrolledCourses() 
    
  
  }, []);


const getEnrolledCourses=()=>{

  UserService.getEnrCourses().then(res=>{

    setEnrolledCourses(res.data);
    console.log(res.data);

  }).catch(error =>{
    console.log(error);
}); 


}
const unenroll=()=>{

  

}



  return (
    <div>
      <div className="title"><h1>Enrolled Courses</h1></div>          

       <div className="row">
          
          
          {
          
          enrolledCourses.map(
                course=>
                                    
          <div class=" card col-xl-4 col-lg-4 col-md-6">
                        <div class="courses-wrapper course-radius-none mb-30">
                            <div class="courses-thumb">
                                <a href={`/coursecontent/${course.id}`}><img src={MobileApplicationDevelopment} /></a>
                            </div>
                            
                            <div class="course-main-content clearfix">
                                <div class="courses-content">
                                    
                                    <div class="courses-heading">
                                    <Link to={`/coursecontent/${course.id}`}>{course.name}</Link>
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
