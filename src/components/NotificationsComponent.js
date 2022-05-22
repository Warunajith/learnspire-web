import React, {useState,useEffect} from 'react'
import UserService from '../services/UserService';
import { Link ,useParams,useNavigate, Navigate} from 'react-router-dom';
import {  Modal } from 'react-bootstrap';


export default function NotificationsComponent() {



    const [notifications,setNotifications]=useState([]);
    const [notification,setNotification]=useState([]);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const notifyDate = notification.timeStamp || '';

    useEffect(() => {

        retrieveNotifications();
        
      
      }, []);

      const retrieveNotifications=()=>{

        UserService.getNotofications().then(res=>{

            setNotifications(res.data.reverse());
           
            console.log(res.data.reverse());
        
          }).catch(error =>{
              
            console.log(error);

        }); 
      }
     const viewNotification=(id,title)=>{

      UserService.getNotofication(id,title).then(res=>{

        setNotification(res.data);
        console.log(res.data);
    
      }).catch(error =>{
        console.log(error);
    }) 
      
      handleShow();

     }

  return (
    <div>
<br></br>
    <br></br>
<div className="row">
    
                <table>
                        <thead>
                           <th></th>

                        </thead>
                        <tbody>
                            {
                                notifications.map(
                                    contentrow=>
                                    <tr key={contentrow.courseId}>
                                    
                                       <td>
                                        <div className="row">
                                            <div className="col-2">

                                            </div>
                                            
                                             <div className="card col-8 bg-warning" style={{height:"100px"} }onClick={()=>viewNotification(contentrow.courseId,contentrow.title)}>
                                             <h4 >{contentrow.courseName}</h4>
                                                  <h5>{contentrow.title}</h5>
                                             </div>
                                             
                                             <div className="col-2">

                                            </div>
                                        </div>
                                        </td>   
                                           
                                    </tr>

                                )
                            }
                                                   
                         </tbody>

                </table>

          </div>

<Modal size="md" show={show} onHide={handleClose}>

                        <Modal.Header closeButton>

                        <Modal.Title><h2>{notification.title}</h2> <h6>{notifyDate.substring(0,10)}</h6></Modal.Title>
                        
                        </Modal.Header>

                        <Modal.Body>

                

                              
                              <h5>{notification.content}</h5>
                        

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