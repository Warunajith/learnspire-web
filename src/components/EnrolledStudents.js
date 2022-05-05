import React from 'react'
import UserService from '../services/UserService';
import { useState,useEffect } from 'react';
import { Link ,useParams,useNavigate} from 'react-router-dom';

export default function EnrolledStudents() {

    const {id}=useParams();
    const [enrolledStudents,setEnrolledStudents]=useState([])

    useEffect(() => {

        getEnrolledStudents(id) }, []);

    const getEnrolledStudents=(id)=>{

        UserService.getEnrStudents(id).then(res=>{

            setEnrolledStudents(res.data);
            console.log(res.data);
        
          }).catch(error =>{
            console.log(error);
        }) 

        }

  return (
    <div>


<div className="row">
                <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Name</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                enrolledStudents.map(
                                    student=>
                                    <tr key={student.email}>
                                        <td>{student.email}</td>
                                        <td>{student.firstName}</td>  
                                           
                                    </tr>

                                )
                            }
                                                   
                         </tbody>

                </table>

          </div>



    </div>
  )
}
