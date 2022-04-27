import axios from "axios";

const API_URL = "https://ums.team8backend.tech/";

class AuthenticationService{

  
   
      login(user){
        return axios.post(API_URL + "signin", user);
          
      }
      logout() {
        localStorage.removeItem("user");
      }
      register(user) {

        return axios.post(API_URL + "signup", user);

      }
      getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
      }

  
}

export default new AuthenticationService