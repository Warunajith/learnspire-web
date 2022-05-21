import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div style={{marginTop:"100px"}}>
          <h1>My Profile</h1>
        <div>
             <div className='row'>
               <div className='card'>
                 picture
               </div>
             </div>
             <div className='row'>
               <h5>Name:</h5>
               <h5>Phone number:</h5>
               <h5>Email:</h5>
               <h5>Address</h5>
             </div>
        </div>
      </div>
    )
  }
}
