import React from 'react'
import UserService from '../services/UserService';
import { Link ,useParams,useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';

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
                <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                
                                <th>Course</th>
                                <th>Marks</th>
                                
                            </tr>

                        </thead>
                        <tbody>
                            {
                                results.map(
                                    subject=>
                                    <tr key={subject.courseId}>
                                    
                                        <td>{subject.courseName}</td>
                                        <td>{subject.marks}</td>
                                       
                                       
                                            
                                           
                                    </tr>

                                )
                            }
                                                   
                         </tbody>

                </table>

          </div>


    </div>
  )
}