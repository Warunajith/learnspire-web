import React from 'react'
import { useState,useEffect } from 'react'
import { Link ,useParams,useNavigate, Navigate} from 'react-router-dom';
import UserService from '../services/UserService';


export default function AddAnnouncement() {


    
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const {id}=useParams();
    const navigate = useNavigate();
  
    const saveAnnouncement=(e)=>{
  
      e.preventDefault();
      
      UserService.addNewAnnouncement(id,title,content);
      navigate(`/coursecontent/${id}`);
      
    }

  return (
    <div>

<div className='container'>
                    <br></br>
                        <div className='row'>

                            <div className="card col-md-6 offset-md-3 offset-md-3">
                            
                                   <h2>Add New Announcement</h2> 
                            
                            <div className='card-body'>
                            
                                    <form>
                                    
                                   


                                    <div className="form-group mb-2">
                                        <label className="form-label">
                                        Title
                                        </label>
                                        <input type="text"
                                            placeholder="Enter the Title"
                                            name="coursename"
                                            className="form-control"
                                            value={title}
                                            onChange={(e)=>setTitle(e.target.value)}>
                                        </input>
                                    </div>

                                    <div className="form-group mb-2">
                                        <label className="form-label">
                                        Content
                                        </label>
                                        <input type="text"
                                            placeholder="Enter the Content"
                                            name="content"
                                            className="form-control"
                                            value={content}
                                            onChange={(e)=>setContent(e.target.value)}>
                                        </input>
                                    </div>

                                    
                                   

                                    <button className="btn btn-success" onClick={(e)=>saveAnnouncement(e)} style={{marginRight:"",marginLeft:"15px"}}>
                                            Add Announcement
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
