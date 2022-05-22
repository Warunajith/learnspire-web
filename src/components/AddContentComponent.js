import React from 'react'
import { useState,useEffect } from 'react'
import { Link ,useParams,useNavigate} from 'react-router-dom';
import UserService from '../services/UserService';

export default function AddContentComponent() {

    
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const {id}=useParams();
    const navigate = useNavigate();
  
    const saveCourseContent=(e)=>{
  
      e.preventDefault();
      
      UserService.addContent(id,title,content);
      navigate(`/addcontent/${id}`)
    }

  return (
    <div>

<div className='container'>
                    <br></br>
                        <div className='row'>

                            <div className="signform col-md-6 offset-md-3 offset-md-3">
                            
                                   <h2>Add New Content</h2> 
                            
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

                                    
                                   

                                    <button className="btn btn-success" onClick={(e)=>saveCourseContent(e)} style={{marginRight:"",marginLeft:"15px"}}>
                                            Add Content
                                    </button>
                                   
                                   <Link to={`/coursecontent/${id}`}style={{marginRight:"",marginLeft:"15px"}} className="btn btn-danger">Cancel</Link>

                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>



    </div>
  )

  
}
