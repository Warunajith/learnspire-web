import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/HomeComponent'
import SignUpComponent from './components/SignUpComponent'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import StudentViewComponent from './components/StudentViewComponent';
import LecturerViewComponent from './components/LecturerViewComponent';
import AvailableCoursesComponenet from './components/AvailableCoursesComponenet';
import EnrolledCoursesComponent from './components/EnrolledCoursesComponent';
import CourseContentComponent from './components/CourseContentComponent';

function App() {
  return (
    <Router>
        


              <div className="container">
                
                <Routes>
                  
                  <Route path="/" exact element={<HomeComponent/>}></Route>
                  <Route path="/signup" element={<SignUpComponent/>}></Route>
                  <Route path="/signin" element={<LoginComponent/>}></Route>
                  <Route path="/studentview" element={<StudentViewComponent/>}></Route>
                  <Route path="/lecturerView" element={<LecturerViewComponent/>}></Route>
                  <Route path="/availablecourses" element={<AvailableCoursesComponenet/>}></Route>
                  <Route path="/enrolledcourses" element={<EnrolledCoursesComponent/>}></Route>
                  <Route path="/coursecontent/:id" element={<CourseContentComponent/>}></Route>
                 
                </Routes>
                
              </div>

          

        
      </Router>
  );
}

export default App;
