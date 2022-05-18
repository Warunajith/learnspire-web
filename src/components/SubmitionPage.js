import React, { Component } from 'react';
import axios from 'axios';

class SubmitionPage extends Component {
    state = {
 
        // Initially, no file is selected
        selectedFile: null
      };
      
      // On file select (from the pop up)
      onFileChange = event => {
      
        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
      
      };

      // On file upload (click the upload button)
    onFileUpload = () => {
    
        // Create an object of formData
        const formData = new FormData();
      
        // Update the formData object
        formData.append(
          "myFile",
          this.state.selectedFile,
          this.state.selectedFile.name
        );
      
        // Details of the uploaded file
        console.log(this.state.selectedFile);
      
        // Request made to the backend api
        // Send formData object
        axios.post("api/uploadfile", formData);
      };

      // File content to be displayed after
    // file upload is complete
    fileData = () => {
    
        if (this.state.selectedFile) {
           
          return (
            <div className='card'>
              <h2>File Details:</h2>
               
  <p>File Name: {this.state.selectedFile.name}</p>
   
               
  <p>File Type: {this.state.selectedFile.type}</p>

  <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
 
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h5>Choose your answer sheet before Pressing the Upload button</h5>
          </div>
        );
      }
    };
    render() {
        return (
            <div>
            <h1>
              Submition Page
            </h1>
            
            <div className='card'>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                 Submit
                </button>
            </div>
          {this.fileData()}
        </div>
        );
    }
}

export default SubmitionPage;