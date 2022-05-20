import logo from './logo.svg';
import './App.css';

import HomeComponent from './components/HomeComponent'
import SignUpComponent from './components/SignUpComponent'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import StudentViewComponent from './components/StudentViewComponent';
import LecturerViewComponent from './components/LecturerViewComponent';
import AvailableCoursesComponent from './components/AvailableCoursesComponent';
import EnrolledCoursesComponent from './components/EnrolledCoursesComponent';
import CourseContentComponent from './components/CourseContentComponent';
import AddNewCourseComponent from './components/AddNewCourseComponent';
import AddAnnouncement from './components/AddAnnouncement';
import EnrolledStudents from './components/EnrolledStudents';
import AddContentComponent from './components/AddContentComponent';
import ViewResultsComponent from './components/ViewResultsComponent';
import Navbar from './components/Navbar';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
import EnrollToCourse from './components/EnrollToCourseComponent'
import SubmitionPage from './components/SubmitionPage'
import NotificationsComponent from './components/NotificationsComponent';



function App() {
  return (
    <div>
    <Router>
        
        

                <div>
              
                  <Routes>
                  
                  <Route path="/" exact element={<HomeComponent/>}></Route>
                  <Route path="/signup" element={<SignUpComponent/>}></Route>
                  <Route path="/signin" element={<LoginComponent/>}></Route>

                  </Routes>
                  </div>


                  <div className="container">

                 
                  
                  <br></br>
                  <Routes>

                  
                 
                
                 
                 
                  <Route path="/addnewcourse" element={<> <Navbar/><AddNewCourseComponent/><FooterComponent /></>}></Route>
                  <Route path="/addnewannouncement/:id" element={<> <Navbar/><AddAnnouncement/><FooterComponent /></>}></Route>
                  <Route path="/enrolledstudents/:id" element={<> <Navbar/><EnrolledStudents/><FooterComponent /></>}></Route>
                  <Route path="/addcontent/:id" element={<> <Navbar/><AddContentComponent/><FooterComponent /></>}></Route>
                  <Route path="/viewresults/" element={<> <Navbar/><ViewResultsComponent/><FooterComponent /></>}></Route>
                  <Route path="/studentview" element={ <> <Navbar/> <StudentViewComponent /> <FooterComponent /></>}/>
                  <Route path="/lecturerView" element={ <> <Navbar/> <LecturerViewComponent/> <FooterComponent /></>}/>
                  <Route path="/available" element={ <> <Navbar/> <AvailableCoursesComponent/> <FooterComponent /></>}/>
                  <Route path="/enrolled" element={ <> <Navbar/> <EnrolledCoursesComponent/> <FooterComponent /></>}/>
                  <Route path="/coursecontent/:id" element={ <> <Navbar/> <CourseContentComponent/> <FooterComponent /></>}/>
                  <Route path="/aboutus" element={ <><Navbar/>  <AboutUs/> <FooterComponent /></>}/>
                  <Route path="/profile" element={ <><Navbar/>  <Profile/> <FooterComponent /></>}/>
                  <Route path="/enrolltocourse" element={ <><Navbar/>   <EnrollToCourse /> <FooterComponent /></>}/>
                  <Route path="/submition" element={ <><Navbar/>   <SubmitionPage /> <FooterComponent /></>}/>
                  <Route path="/notifications" element={ <><Navbar/>   <NotificationsComponent/> <FooterComponent /></>}/>
                 
                </Routes>
                </div>
              
              <br></br>
              
  
        
      </Router>
      </div>
  );
}

export default App;
