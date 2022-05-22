import React from 'react'
import {getRandomColor,createImageFromInitials} from '../components/Utils'
import UserService from '../services/UserService';
import { useState,useEffect } from 'react';

export default function Profile() {

  var [name1,setName]=useState([])
  const [email,setEmail]=useState([])
  const [role,setRole]=useState([])
  
  let name=name1;
  let imgSrc = "";
 

  useEffect(() => {

   
  UserService.getUser().then(res=>{

    
    setName(res.data.firstName+" "+res.data.lastName)
    setEmail(res.data.email)    
    setRole(res.data.role)     

    console.log(res.data.firstName+' '+res.data.lasttName);
     
 }).catch(error=>{
   alert("Couldn't Get the API call done")
 
});
  })
  
    return (
      <div>
          <h1>My Profile</h1>
        <div>
             <div className='row'>
               <div className='col-md-4'>
                </div>
             <div className='col-md-4'>
                      <img
                        className="rounded-circle"
                        id='preview'
                        src={
                          imgSrc.length <= 0
                            ? createImageFromInitials(300, name, getRandomColor())
                            : imgSrc
                        }
                        alt='profile-pic'
                      />

              <br></br><br></br>

              <div className='row'>
              
               <h5>Name: {name}</h5>
               <h5>Email: {email}</h5>
               <h5>Account Type: {role}</h5>
             </div>

		        </div>

            <div className='col-md-4'>
            </div>

             </div>
             
        </div>
      </div>
    )
  
}