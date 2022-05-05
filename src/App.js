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
<<<<<<< HEAD
import AddNewCourseComponent from './components/AddNewCourseComponent';
import AddAnnouncement from './components/AddAnnouncement';
import EnrolledStudents from './components/EnrolledStudents';
import AddContentComponent from './components/AddContentComponent';
import ViewResultsComponent from './components/ViewResultsComponent';
=======
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';

>>>>>>> 2523557a3aa44e16996e623bfd853642d4715016

function App() {
  return (
    <Router>
        
         <HeaderComponent/>

              <div className="container">
                
                <Routes>
                  
                  <Route path="/" exact element={<HomeComponent/>}></Route>
                  <Route path="/signup" element={<SignUpComponent/>}></Route>
                  <Route path="/signin" element={<LoginComponent/>}></Route>
<<<<<<< HEAD
                  <Route path="/studentview" element={<StudentViewComponent/>}></Route>
                  <Route path="/lecturerView" element={<LecturerViewComponent/>}></Route>
                  <Route path="/availablecourses" element={<AvailableCoursesComponenet/>}></Route>
                  <Route path="/enrolledcourses" element={<EnrolledCoursesComponent/>}></Route>
                  <Route path="/coursecontent/:id" element={<CourseContentComponent/>}></Route>
                  <Route path="/addnewcourse" element={<AddNewCourseComponent/>}></Route>
                  <Route path="/addnewannouncement/:id" element={<AddAnnouncement/>}></Route>
                  <Route path="/enrolledstudents/:id" element={<EnrolledStudents/>}></Route>
                  <Route path="/addcontent/:id" element={<AddContentComponent/>}></Route>
                  <Route path="/viewresults/" element={<ViewResultsComponent/>}></Route>

=======
                  <Route path="/studentview" element={ <> <Navbar/> <StudentViewComponent /> <FooterComponent /></>}/>
                  <Route path="/lecturerView" element={ <> <Navbar/> <LecturerViewComponent/> <FooterComponent /></>}/>
                  <Route path="/available" element={ <> <Navbar/> <AvailableCoursesComponenet/> <FooterComponent /></>}/>
                  <Route path="/enrolled" element={ <> <Navbar/> <EnrolledCoursesComponent/> <FooterComponent /></>}/>
                  <Route path="/coursecontent/:id" element={ <> <Navbar/> <CourseContentComponent/> <FooterComponent /></>}/>
                  <Route path="/aboutus" element={ <><Navbar/>  <AboutUs/> <FooterComponent /></>}/>
                  <Route path="/profile" element={ <><Navbar/>  <Profile/> <FooterComponent /></>}/>
                  
                 
>>>>>>> 2523557a3aa44e16996e623bfd853642d4715016
                </Routes>
                
              </div>
              
              

         

        
      </Router>
  );
}

export default App;
