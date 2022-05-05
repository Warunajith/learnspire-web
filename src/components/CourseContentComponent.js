import React from 'react'
import UserService from '../services/UserService';
import { Link ,useParams,useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';

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

        <div className='col-8'>
        <h3>Announcements:-
        {announcements.map(msgData=>msgData.title)}</h3>
        </div>


        <div className='col-4'>
        <Link to={`/addnewannouncement/${id}`} className="btn btn-info" style={{marginTop:"10px", display: showInfo ? "block" : "none" }} >Add Announcement</Link>
      </div>
        </div>
        
        <div className='col-3'>
        


        <Link to={`/enrolledstudents/${id}`} className="btn btn-info"  style={{ display: showInfo ? "block" : "none" }}>Display Students</Link>
        <h3 style={{ display: showInfo ?  "none":"block" }}>Marks:-{marks} </h3>
        
        </div>

        <div className='col-4'>
        
        <Link to={`/addcontent/${id}`} className="btn btn-info"  style={{ marginTop:"10px",display: showInfo ? "block" : "none" }}>Add Content</Link>

        
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
  )
}
    