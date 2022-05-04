import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomeComponent from './components/HomeComponent'
import SignUpComponent from './components/SignUpComponent'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import StudentViewComponent from './components/StudentViewComponent';
import LecturerViewComponent from './components/LecturerViewComponent';
import AvailableCoursesComponenet from './components/AvailableCoursesComponenet';
import EnrolledCoursesComponent from './components/EnrolledCoursesComponent';
import CourseContentComponent from './components/CourseContentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';


function App() {
  return (
    <Router>
        
         <HeaderComponent/>

              <div className="container">
                
                <Routes>
                  
                  <Route path="/" exact element={<HomeComponent/>}></Route>
                  <Route path="/signup" element={<SignUpComponent/>}></Route>
                  <Route path="/signin" element={<LoginComponent/>}></Route>
                  <Route path="/studentview" element={ <> <Navbar/> <StudentViewComponent /> <FooterComponent /></>}/>
                  <Route path="/lecturerView" element={ <> <Navbar/> <LecturerViewComponent/> <FooterComponent /></>}/>
                  <Route path="/available" element={ <> <Navbar/> <AvailableCoursesComponenet/> <FooterComponent /></>}/>
                  <Route path="/enrolled" element={ <> <Navbar/> <EnrolledCoursesComponent/> <FooterComponent /></>}/>
                  <Route path="/coursecontent/:id" element={ <> <Navbar/> <CourseContentComponent/> <FooterComponent /></>}/>
                  <Route path="/aboutus" element={ <><Navbar/>  <AboutUs/> <FooterComponent /></>}/>
                  <Route path="/profile" element={ <><Navbar/>  <Profile/> <FooterComponent /></>}/>
                  
                 
                </Routes>
                
              </div>
              
              

         

        
      </Router>
  );
}

export default App;
