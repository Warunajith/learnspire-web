import React from 'react'
import { Link  } from 'react-router-dom';

export default function HomeComponent() {




  return (
    <div>
            <br></br>
            <Link className="btn btn-info" to={`/signup`} style={{marginRight:"20px" ,marginLeft:"500px"}}>SignUp</Link>
            
            <Link className="btn btn-info" to={`/signin`} style={{marginRight:"" ,marginLeft:"50px"}}>Login</Link>


    </div>
  )
}
