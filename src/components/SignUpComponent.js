import React from 'react'
import { useState,useEffect } from 'react'
import { Link ,useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';
import AuthenticationService from '../services/AuthenticationService';
import FrontImage from '../assets/Image1.jpg'



export default function SignUpComponent() {
    

  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [role,setRole]=useState("lecturer")


  const saveUser=(e)=>{

    e.preventDefault();
    const user={email,firstName,lastName,role,password}
    
    AuthenticationService.register(user).then((response)=>{

        console.log(response.data);
        alert("Registration Successful");

      }).catch(error=>{
        console.log(error)

      });
  }

  return (

    <div>
        <div className='home' style={{ backgroundImage: `url(${FrontImage})` }}>

        <div className='container'>
                    <br></br>
                        <div className='row'>

                            <div className="card col-md-6 offset-md-3 offset-md-3">
                            
                                   <h2>User SignUp</h2> 
                            
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

                                    <button className="btn btn-success" onClick={(e)=>saveUser(e)} style={{marginRight:"",marginLeft:"15px"}}>
                                            SignUp
                                    </button>
                                   
                                   <Link to="/" style={{marginRight:"",marginLeft:"15px"}} className="btn btn-danger">Cancel</Link>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                

                </div>



    </div>
  )
}
