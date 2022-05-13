import React from 'react'
import { Link ,useParams,useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import FooterComponent from './FooterComponent';

export default function LecturerViewComponent() {

 
  return (
    <div>
      
      <h1>This is Lecturer view Page</h1>

      <Link className="btn btn-info" to="/addnewcourse" style={{marginRight:"20px" ,marginLeft:"10px"}}>Add New Course</Link>
     
      <Link className="btn btn-info" to="/enrolled">Lecturer Enrolled Course</Link>
     

        
    </div>
  )
}
