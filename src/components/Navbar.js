
import logo1 from '../assets/logo1.png'
import {Link} from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Notifications from '@mui/icons-material/Notifications';
import { useState,useEffect } from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

function Navbar() {



    const [openLinks, setOpenLinks] = useState(false);
  
    const toggleNavbar = () => {
    setOpenLinks(!openLinks);
    };

    // button hidden variable for Lecturer Only
    const[showInfo,setShowInfo]=useState([]);

    useEffect(() => {

      if(localStorage.getItem('role')==="lecturer"){
        console.log("upto now done")
        setShowInfo(false)
      }
      else{
        setShowInfo(true)
      }



    })

    return (
      <div className='navbar' style={{marginTop:"0px"}}>
        <div className='leftSide' id={openLinks ? 'open' : 'close'}>
          <img  src={logo1} />
          <div className='hiddenLinks'>
            <Link to='/'> Home </Link>
            <Link to='/enrolled'> Enrolled Courses </Link>
            <Link to='/available'> Available Courses </Link>
            <Link to='/aboutus'> About </Link>
            <Link to='/profile'>
            
            <AccountCircleIcon/>
          </Link>
          </div>
        </div>
        <div className='rightSide'>
          <Link to='/'> Home </Link>
          <Link to='/enrolled'> Dashboard </Link>
          <Link to='/viewresults' style={{ display: showInfo ? "block" : "none" }}> Results </Link>
          <Link to='/available' style={{ display: showInfo ? "block" : "none" }}> Available Courses </Link>
          <Link to='/aboutus'> About </Link>
          <Link to="/notifications"><Notifications/></Link>
          <Link to='/profile'>
            <AccountCircleIcon/>
          </Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    );
  }
  
  export default Navbar;