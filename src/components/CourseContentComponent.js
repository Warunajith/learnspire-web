import React from 'react'
import UserService from '../services/UserService';
import { Link ,useParams,useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';

export default function CourseContentComponent() {

    
    const [courseContent,setCourseContent]=useState([]);
    const [announcements,setAnnouncements]=useState([]);

    const {id}=useParams();
    

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

    
    }, []);

       

            


        

  return (
    <div>
        <div>
        <h3>Announcements:-
        {announcements.map(msgData=>msgData.title)}</h3>
        <br></br>
        
        
        
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
