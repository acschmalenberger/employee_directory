import axios from "axios";

export default{
    //Get all users
    getUsers:()=>{
        return axios.get("https://randomuser.me/api/?results=200&nat=us")
    }
}