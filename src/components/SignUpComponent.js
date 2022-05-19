import React from 'react'
import { useState,useEffect } from 'react'
import { Link ,useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';
import AuthenticationService from '../services/AuthenticationService';
import FrontImage from '../assets/Image1.jpg'
import '../styles/SignUpComponent.css'



export default function SignUpComponent() {
    
 const navigate = useNavigate();
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmpassword,setConfirmPassword]=useState('')
  const [role,setRole]=useState('')



  const saveUser=(e)=>{

    e.preventDefault();
    if(firstName=="" ||lastName=="" ||email=="" ||role==""||password=="" ||confirmpassword==""){
        alert("All the Fields are required")
}
else if(password!==confirmpassword){
alert("Passwords not Matching");
}
else{
    const user={email,firstName,lastName,role,password}
    
    AuthenticationService.register(user).then((response)=>{

        console.log(response.data);
        alert("Registration Successful");
        navigate("/signin")

      }).catch(error=>{
        console.log(error)

      });
    }
  }

  return (

    <div>
        <div className='home' style={{ backgroundImage: `url(${FrontImage})` }}>

        <div className='container'>
                    <br></br>
                        <div className='row'>

                            <div className="card col-md-6 offset-md-3 offset-md-3">
                            
                            <h2 style={{marginRight:"",marginLeft:"180px"}}>User SignUp</h2>
                            
                            <div className='card-body'>
                            
                                    <form className="needs-validation">
                                    
                                    <div  className="form-group mb-2">
                                        <label className="form-label">
                                        First Name
                                        </label>
                                        <input type="text"
                                            placeholder="Enter First Name"
                                            name="firstname"
                                            className="form-control"
                                            value={firstName}
                                            onChange={(e)=>setFirstName(e.target.value)}>
                                        </input>
                                    </div>


                                    <div className="form-group mb-2">
                                        <label className="form-label">
                                        Last Name
                                        </label>
                                        <input type="text"
                                            placeholder="Enter Last Name"
                                            name="lastname"
                                            className="form-control"
                                            value={lastName}
                                            onChange={(e)=>setLastName(e.target.value)}>
                                        </input>
                                    </div>

                                    <div className="form-group mb-2">
                                        <label className="form-label">
                                        Email
                                        </label>
                                        <input type="email"
                                            placeholder="Enter Email"
                                            name="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e)=>setEmail(e.target.value)}>
                                        </input>
                                    </div>
                                   <div className="form-group mb-2">
                                        <label className="form-label">
                                        Password
                                        </label>
                                        <input type="password"
                                            placeholder="Enter the Password"
                                            name="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e)=>setPassword(e.target.value)}>
                                        </input>
                                    </div>
                                    <div className="form-group mb-2">
                                        <label className="form-label">
                                        Confirm Password
                                        </label>
                                        <input type="password"
                                            placeholder="Confirm the Password"
                                            name="confirmpassword"
                                            className="form-control"
                                            value={confirmpassword}
                                            onChange={(e)=>setConfirmPassword(e.target.value)}>
                                        </input>
                                    </div>
                                    
                                   <div>
                                   <label className="form-label">
                                        You are?
                                        </label>
                                        <label for="std" className="form-label" style={{marginRight:"15px",marginLeft:"10px"}}>
                                        Student 
                                        </label>
                                        
                                        <input type="radio"
                                            id="std"
                                            name="role"
                                            value="student"
                                            onChange={(e)=>setRole(e.target.value)}
                                            />

                                       <label for="lct" className="form-label" style={{marginRight:"15px",marginLeft:"10px"}}>
                                        || Lecturer
                                        </label>
                                        
                                        <input type="radio"
                                            id="lct"
                                            name="role"
                                            value="lecturer"
                                            onChange={(e)=>setRole(e.target.value)}
                                            />
                                            
                                        </div>
                                        
                                    <div>
                                    <br></br>
                                    <button className="btn btn-success" onClick={(e)=>saveUser(e)} style={{marginRight:"15px",marginLeft:"135px"}}>
                                            SignUp
                                    </button>
                                   
                                    <Link to="/"  className="btn btn-danger">Cancel</Link>
                                   </div>
                                   
                                    </form>
                                    </div>
                                
                            </div>
                        </div>
                    </div>

                

                </div>



    </div>
  )
}
