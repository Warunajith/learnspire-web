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
        <div className="card ">
        <h3>Course Content</h3>
        </div>
        
        </div>

        <div className="row">
             <div className="card ">
                  <h3>Week 01</h3>
                 <div>
                 <a href="/submition">Add Submition</a>
                 </div>
             </div>
        </div>

        <div className="row">
             <div className="card ">
                  <h3>Week 02</h3>
             </div>
        </div>
        <div className="row">
             <div className="card ">
                  <h3>Week 03</h3>
             </div>
        </div>
        <div className="row">
             <div className="card ">
                  <h3>Week 04</h3>
             </div>
        </div>
        <div className="row">
             <div className="card ">
                  <h3>Week 05</h3>
             </div>
        </div>
        <div className="row">
             <div className="card ">
                  <h3>Week 06</h3>
             </div>
        </div>
        <div className="row">
             <div className="card ">
                  <h3>Week 07</h3>
             </div>
        </div>
        <div className="row">
             <div className="card ">
                  <h3>Week 08</h3>
             </div>
        </div>
        <div className="row">
             <div className="card ">
                  <h3>Week 09</h3>
             </div>
        </div>
        <div className="row">
             <div className="card ">
                  <h3>Week 10</h3>
             </div>
        </div>
        <div className="row">
             <div className="card ">
                  <h3>Week 11</h3>
             </div>
        </div>
        <div className="row">
             <div className="card ">
                  <h3>Week 12</h3>
             </div>
        </div>
        <div className="row">
             <div className="card ">
                  <h3>Week 13</h3>
             </div>
        </div>
        <div className="row">
             <div className="card ">
                  <h3>Week 14</h3>
             </div>
        </div>
        <div className="row">
             <div className="card ">
                  <h3>Week 15</h3>
             </div>
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
    