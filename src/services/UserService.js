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

addNewCourse(courseId,courseName){

   axios.post('https://lms.team8backend.tech/course/addnewcourse',{"id" :courseId ,"name":courseName},{ headers: AuthenticationHeader()});

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
addNewAnnouncement(courseId,title,content){

    axios.post('https://lms.team8backend.tech/announcement/addannouncement',{"courseId" :courseId ,"title":title,"content":content},{ headers: AuthenticationHeader()});
 
 }
 getEnrStudents(id){
    return axios.post('https://lms.team8backend.tech/mark/getenrolledstudents',{"courseId" :id}, { headers: AuthenticationHeader()});
 }
 addContent(courseId,title,content){

    return axios.post('https://lms.team8backend.tech/content/addcontent',{"courseId" :courseId ,"title":title,"content":content}, { headers: AuthenticationHeader()});

 }
getCourseMarkOfUser(id){
    return axios.post('https://lms.team8backend.tech/mark/getmarks',{"courseId" :id}, { headers: AuthenticationHeader()});
}
getallmarks(){
    return axios.get('https://lms.team8backend.tech/mark/getallmarks', { headers: AuthenticationHeader()});
}
addMarkstoStudent(courseId,marks,email){
    return axios.post('https://lms.team8backend.tech/mark/addmarks',{"courseId" :courseId ,"marks":marks,"studentEmail":email}, { headers: AuthenticationHeader()});
}
getNotofications(){
    return axios.get('https://lms.team8backend.tech/announcement/getnotifications', { headers: AuthenticationHeader()});
}
getNotofication(courseId,title){
    return axios.post('https://lms.team8backend.tech/announcement/getnotification',{"courseId" :courseId ,"title":title}, { headers: AuthenticationHeader()});



}



}
export default new UserService();