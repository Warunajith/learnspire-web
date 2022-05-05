import React from 'react'
import { useState,useEffect } from 'react'
import { Link ,useParams,useNavigate} from 'react-router-dom';
import UserService from '../services/UserService';


export default function AddNewCourseComponent() {


  const [courseId,setCourseId]=useState('')
  const [courseName,setCourseName]=useState('')


  const saveCourse=(e)=>{

    e.preventDefault();
    console.log(courseName);
    UserService.addNewCourse(courseId,courseName);
    
  }

  return (
    <div>

<div className='container'>
                    <br></br>
                        <div className='row'>

                            <div className="card col-md-6 offset-md-3 offset-md-3">
                            
                                   <h2>Add New Course</h2> 
                            
                            <div className='card-body'>
                            
                                    <form>
                                    
                                    <div  className="form-group mb-2">
                                        <label className="form-label">
                                        Course ID
                                        </label>
                                        <input type="text"
                                            placeholder="Enter ID"
                                            name="courseId"
                                            className="form-control"
                                            value={courseId}
                                            onChange={(e)=>setCourseId(e.target.value)}>
                                        </input>
                                    </div>


                                    <div className="form-group mb-2">
                                        <label className="form-label">
                                        Course Name
                                        </label>
                                        <input type="text"
                                            placeholder="Enter Course Name"
                                            name="coursename"
                                            className="form-control"
                                            value={courseName}
                                            onChange={(e)=>setCourseName(e.target.value)}>
                                        </input>
                                    </div>

                                    
                                   

                                    <button className="btn btn-success" onClick={(e)=>saveCourse(e)} style={{marginRight:"",marginLeft:"15px"}}>
                                            Add Course
                                    </button>
                                   
                                   <Link to="/" style={{marginRight:"",marginLeft:"15px"}} className="btn btn-danger">Cancel</Link>

                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>



    </div>
  )
}
