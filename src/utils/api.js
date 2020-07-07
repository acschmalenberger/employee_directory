import axios from "axios";

export default{
    //Get all users
    getEmployees:()=>{
        return axios.get("https://randomuser.me/api/?results=200&nat=us")
        .then(res =>{
            const employees = res.data
            return employees.map(employee =>{
                return{
                    picture: employee.picture.medium,
                    firstName: employee.name.first,
                    lastName: employee.name.last,
                    cell: employee.cell,
                    email: employee.email,
                    username: employee.login.username
                }
            })
        })
    }
}