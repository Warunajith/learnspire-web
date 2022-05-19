import React from 'react'
import UserService from '../services/UserService';
import { useState,useEffect } from 'react';
import { Link ,useParams,useNavigate} from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

export default function EnrolledStudents() {

    const {id}=useParams();
    const [enrolledStudents,setEnrolledStudents]=useState([])
    const [addmarks,setAddMarks]=useState('');
    const [show, setShow] = useState(false);
    const [rowemail, setRowEmail] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const navigate = useNavigate();


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
        const updateMarks=(e)=>{
            e.preventDefault();

                UserService.addMarkstoStudent(id,addmarks,rowemail);
                handleClose();
                navigate(`/enrolledstudents/${id}`);


        }
        const updateclick=(stdemail)=>{
    
            setRowEmail(stdemail);
            console.log(rowemail);
            handleShow();
        
        }


  return (
    <div>


<div className="row">
                <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Name</th>
                                <th>Marks</th>
                                <th></th>

                            </tr>

                        </thead>
                        <tbody>
                            {
                                enrolledStudents.map(
                                    student=>
                                    <tr key={student.email}>
                                        <td>{student.email}</td>
                                        <td>{student.firstName}</td>
                                        <td>{student.marks}</td>
                                        <td><Button variant="info" onClick={()=>updateclick(student.email)}>Update</Button></td>
 
                                           
                                    </tr>

                                )
                            }
                                                   
                         </tbody>

                </table>

          </div>
          <Modal size="md" show={show} onHide={handleClose}>

                        <Modal.Header closeButton>

                        <Modal.Title>Add Marks</Modal.Title>

                        </Modal.Header>

                        <Modal.Body>


                        <form>

                        <input type="text"
                        name="marks"
                        value={addmarks}
                        onChange={(e)=>setAddMarks(e.target.value)}></input>

                        <button className="btn btn-success" onClick={(e)=>updateMarks(e)} style={{marginRight:"15px",marginLeft:"135px"}}>
                                                            Add
                                                    </button>

                        </form>

                        </Modal.Body>

                        {/* <Modal.Footer>

                        <Button variant="secondary" onClick={handleClose}>

                            Close

                        </Button>
                        <Button variant="primary" onClick={handleClose}>

                            Save It!

                        </Button>

                        </Modal.Footer> */}

                </Modal>





    </div>
  )
}
