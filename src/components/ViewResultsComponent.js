import React from 'react'
import UserService from '../services/UserService';
import { Link ,useParams,useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import '../styles/ViewResultsComponent.css'


export default function ViewResultsComponent() {

    const [results,setResults]=useState([]);

    useEffect(() => {
        

        UserService.getallmarks().then(res=>{

            setResults(res.data);
            console.log(res.data);
        
          }).catch(error =>{
              
            console.log(error);

        }); 

    }); 


  return (
    <div>

<div className="row">
    <br></br>
                <table className="table table-striped table-bordered" style={{marginTop:"100px"}}>
                        <thead>
                            <tr>
                                
                                <th>Course</th>
                                <th>Marks</th>
                                <th>Grade</th>
                                
                            </tr>

                        </thead>
                        <tbody>
                            {
                                results.map(
                                    subject=>
                                    <tr key={subject.courseId}>
                                    
                                        <td>{subject.courseName}</td>
                                        <td>{subject.marks}</td>
                                        <td>{subject.grade}</td>
                                       
                                       
                                            
                                           
                                    </tr>

                                )
                            }
                                                   
                         </tbody>

                </table>

          </div>


    </div>
  )
}
