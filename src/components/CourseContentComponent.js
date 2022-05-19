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



    UserService.getUser().then(res=>{

      const roles=res.data.role;
      console.log(res.data);

      if(roles==="student"){
        console.log("upto now done")
        setShowInfo(false)
      }
      else{
        setShowInfo(true)
      }
     
      
      
  }).catch(error=>{
    console.log(error)
  
});

UserService.getCourseMarkOfUser(id).then(res=>{

  setMarks(res.data.marks);
  console.log(res.data);

}).catch(error =>{
    
  console.log(error);
});

});

  
  return (
     
    <div>
        <div className="row">
             
                  <h3>Course Name</h3>
             
        </div>
        <div className="row">
        <div class="card ">
        <h3>Announcements:-
        {announcements.map(msgData=>msgData.title)}</h3>
        </div>


        <div className='col-4'>
        <Link to={`/addnewannouncement/${id}`} className="btn btn-info" style={{marginTop:"10px", display: showInfo ? "block" : "none" }} >Add Announcement</Link>
      </div>
        </div>
        
          
    <div>
        <div className="row">
        <div class="card ">
        <h3>Course Content</h3>
        </div>
        </div>

        <div className="row">
             <div class="card ">
                  <h3>Week 01</h3>
                 <div>
                 <a href="/submition">Add Submition</a>
                 </div>
             </div>
        </div>

        <div className="row">
             <div class="card ">
                  <h3>Week 02</h3>
             </div>
        </div>
        <div className="row">
             <div class="card ">
                  <h3>Week 03</h3>
             </div>
        </div>
        <div className="row">
             <div class="card ">
                  <h3>Week 04</h3>
             </div>
        </div>
        <div className="row">
             <div class="card ">
                  <h3>Week 05</h3>
             </div>
        </div>
        <div className="row">
             <div class="card ">
                  <h3>Week 06</h3>
             </div>
        </div>
        <div className="row">
             <div class="card ">
                  <h3>Week 07</h3>
             </div>
        </div>
        <div className="row">
             <div class="card ">
                  <h3>Week 08</h3>
             </div>
        </div>
        <div className="row">
             <div class="card ">
                  <h3>Week 09</h3>
             </div>
        </div>
        <div className="row">
             <div class="card ">
                  <h3>Week 10</h3>
             </div>
        </div>
        <div className="row">
             <div class="card ">
                  <h3>Week 11</h3>
             </div>
        </div>
        <div className="row">
             <div class="card ">
                  <h3>Week 12</h3>
             </div>
        </div>
        <div className="row">
             <div class="card ">
                  <h3>Week 13</h3>
             </div>
        </div>
        <div className="row">
             <div class="card ">
                  <h3>Week 14</h3>
             </div>
        </div>
        <div className="row">
             <div class="card ">
                  <h3>Week 15</h3>
             </div>
        </div>
                <div className="row">
                <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                
                                <th>Title</th>
                                <th>Content</th>
                                <th>timeStamp</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                courseContent.map(
                                    contentrow=>
                                    <tr key={contentrow.courseId}>
                                    
                                        <td>{contentrow.title}</td>
                                        <td>{contentrow.content}</td>
                                        <td>{contentrow.timeStamp}</td>
                                       
                                            
                                           
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
    