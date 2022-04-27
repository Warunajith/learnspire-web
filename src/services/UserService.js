import axios from 'axios';
import AuthenticationHeader from './AuthenticationHeader';


class UserService {

getUser(){

    return axios.get('https://lms.team8backend.tech/user/getuser', { headers: AuthenticationHeader()});

}

addUser(){
    const b=AuthenticationHeader()
    console.log(b)
    axios.post('https://lms.team8backend.tech/user/adduser',null,{ headers: b });
}

addNewCourse(obj){
    axios.post('https://lms.team8backend.tech/course/addnewcourse',obj,{ headers: AuthenticationHeader()});

}

getAvlCourses(){

    return axios.get('https://lms.team8backend.tech/course/availablecourses', { headers: AuthenticationHeader()});

}
getEnrCourses(){

    return axios.get('https://lms.team8backend.tech/course/enrolledcourses', { headers: AuthenticationHeader()});

}
getContent(id){
    
    return axios.post('https://lms.team8backend.tech/content/getcontent',{"courseId" :id },{ headers: AuthenticationHeader()});
}
//Enroll to the course
addUserToCourse(id){
     axios.post('https://lms.team8backend.tech/course/adduser',{"courseId" :id },{ headers: AuthenticationHeader()});
}
viewAnnouncements(id){
    return axios.post('https://lms.team8backend.tech/announcement/getannouncements',{"courseId" :id },{ headers: AuthenticationHeader()});
}
getMarks(id){
    return axios.post('https://lms.team8backend.tech/mark/getmarks',{"courseId" :id },{ headers: AuthenticationHeader()});
}

}
export default new UserService();