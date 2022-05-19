import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import '../styles/EnrollToCourseComponent.css'

class EnrollToCourseComponent extends Component {
    render() {
        return (
        <div>
            <div>
                <h1>Course Name</h1>
                
            </div>

            <div className="row">
                <div class="card ">
                  <h5>Lecturer:</h5>
                </div>
                <div class="card ">
                  <h5>Course Content:</h5>
                </div>
                
                <div class="card ">
                <label className="form-label">Enter Enrollment Key:</label>
                <input className="input-field" type="password"
                    placeholder="Enrollment Key"
                    name="enrollmentkey"
                    >
                </input>
               
                <Link to="/enrolled" className="btn btn-success" >Enroll Me</Link>
                </div>
            </div>
        </div>
        );
    }
}

export default EnrollToCourseComponent;