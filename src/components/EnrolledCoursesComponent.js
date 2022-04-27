import React from 'react'
import UserService from '../services/UserService';
import { useState,useEffect } from 'react';
import { Link ,useParams,useNavigate} from 'react-router-dom';

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
                <div className="row">
                <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Enrolled Courses</th>
                                <th>Marks</th>
                                <th></th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                enrolledCourses.map(
                                    course=>
                                    <tr key={course.id}>
                                        <td><Link to={`/coursecontent/${course.id}`}>{course.name}</Link></td>
                                        <td>{marks}</td>
                                        <td><button className="btn btn-danger" onClick={()=>unenroll()}>UnEnroll</button></td>
                                            
                                           
                                    </tr>

                                )
                            }
                                                   
                         </tbody>

                </table>

          </div>

    </div>
  )
}
