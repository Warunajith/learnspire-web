import React from 'react'
import UserService from '../services/UserService';
import { Link ,useParams,useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import '../styles/CourseContentComponent.css'

export default function CourseContentComponent() {

    
    const [courseContent,setCourseContent]=useState([]);
    const [announcements,setAnnouncements]=useState([]);
    const [marks,setMarks]=useState([]);
    const {id}=useParams();

   // button hidden variable for Lecturer Only
   const[showInfo,setShowInfo]=useState([]);
    

    useEffect(() => {
        

        UserService.getContent(id).then(res=>{

            setCourseContent(res.data);
            console.log(res.data);
        
          }).catch(error =>{
              
            console.log(error);

        });  
    
    UserService.viewAnnouncements(id).then(res=>{

        setAnnouncements(res.data);
        console.log(res.data);
    
      }).catch(error =>{
          
        console.log(error);

    });



    

      if(localStorage.getItem('role')==="student"){
        console.log("upto now done")
        setShowInfo(false)
      }
      else{
        setShowInfo(true)
      }
     
      
      
  

});

  
  return (
     
    <div>
        <br></br>
        <div className="row">

        <div className='col-4'>
      
        <Link to={`/enrolledstudents/${id}`} className="btn btn-info"  style={{ display: showInfo ? "block" : "none" }}>Display Students</Link>
        
        
        </div>

        <div className='col-4'>
        
        <Link to={`/addcontent/${id}`} className="btn btn-primary"  style={{ display: showInfo ? "block" : "none" }}>Add Content</Link>
        
        </div>
        
        <div className='col-4'>
        <Link to={`/addnewannouncement/${id}`} className="btn btn-warning" style={{display: showInfo ? "block" : "none" }} >Add Announcement</Link>
       </div>
       
        </div>
        
          
    <div>
        <div className="row">
        
        <h1 className="text-center">Course Content</h1>
        </div>
        
        

        

       
        
        
                <div className="row">
                <table>
                        <thead>
                           <th></th>

                        </thead>
                        <tbody>
                            {
                                courseContent.map(
                                    contentrow=>
                                    <tr key={contentrow.courseId}>
                                    
                                       <td>
                                        <div className="row">
                                             <div className="card ">
                                                  <h4>{contentrow.title}</h4>
                                                  <h5>{contentrow.content}</h5>
                                             </div>
                                        </div>
                                        </td>   
                                           
                                    </tr>

                                )
                            }
                                                   
                         </tbody>

                </table>

          </div>

          </div>
          </div>
          
   
    
  )
}
    