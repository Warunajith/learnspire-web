import React from 'react'
import { useState,useEffect } from 'react'
import { Link ,useParams,useNavigate} from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';
import UserService from '../services/UserService';
import FrontImage from '../assets/Signup.jpg'
import '../styles/LoginComponent.css'


export default function LoginComponent() {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    const navigate = useNavigate();

    const loginUser=(e)=>{
        e.preventDefault();
        const user={email,password}
        console.log(user);
        AuthenticationService.login(user).then(response => {
            
              
              localStorage.setItem("user", JSON.stringify(response.data));
              
              UserService.getUser().then(res=>{

                 
                 localStorage.setItem("role",res.data.role );

                 console.log(res.data);

                 UserService.addUser();
                 console.log(res.data.role);
                 navigate("/enrolled");

                  
                 
                  
              }).catch(error=>{
                alert("Couldn't Get the API call done")
              
            });

            
           
          }).catch(error=>{
              alert("Incorrect Email or Password")
            
          });



    }
  return (
    <div>
        
        <div className='home' style={{ backgroundImage: `url(${FrontImage})` }}>

<div className='container'>
                    <br></br>
                        <div className='row'>

                            <div className="loginf col-md-6 offset-md-3 offset-md-3" style={{height:"400px", width:"500px"}}>
                            
                            <div style={{marginLeft:"150px", marginTop:"15px"}}><h2>User Login</h2> </div>  
                            
                            <div className='card-body'>
                            
                            
                                    <form>
       
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

                                    <button className="btn btn-success" onClick={(e)=>loginUser(e)} style={{marginRight:"",marginLeft:"15px"}}>
                                            Login
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
