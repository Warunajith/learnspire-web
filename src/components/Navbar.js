import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
  
    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
    return (
      <div className='navbar'>
        <div className='leftSide' id={openLinks ? 'open' : 'close'}>
          <img src={Logo} />
          <div className='hiddenLinks'>
            <Link to='/home'> Home </Link>
            <Link to='/enrolled'> Enrolled Courses </Link>
            <Link to='/available'> Available Courses </Link>
            <Link to='/aboutus'> About </Link>
            <Link to='/profile'>
            <AccountCircleIcon/>
          </Link>
          </div>
        </div>
        <div className='rightSide'>
          <Link to='/home'> Home </Link>
          <Link to='/enrolled'> Enrolled Courses </Link>
          <Link to='/available'> Available Courses </Link>
          <Link to='/aboutus'> About </Link>
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