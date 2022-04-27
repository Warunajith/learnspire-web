import React from 'react'
import UserService from '../services/UserService';
import { useState,useEffect } from 'react';

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

<div className="row">
                <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Available Courses</th>
                                <th></th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                availablelCourses.map(
                                    course=>
                                    <tr key={course.id}>
                                        <td>{course.name}</td>
                                        <td><button className="btn btn-success" onClick={()=>enroll(course.id)}>Enroll</button></td>
                                            
                                           
                                    </tr>

                                )
                            }
                                                   
                         </tbody>

                </table>

          </div>

    </div>
  )
}
