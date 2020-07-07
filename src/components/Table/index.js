import React from "react";
import api from "../../utils/api.js"

// import "./style.css";

class Table extends React.Component {
    //set State to data
    componentDidMount(){
        api.getUsers()
        .then((result)=>{
            console.log(result)
        })
        
    }
    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Picture</td>
                            <td>First Name</td>
                            <td ><button> Last Name </button></td>
                            <td>Cell</td>
                            <td>Email</td>
                            <td>Username</td>
                        </tr>
                    </thead>
                    <body>
                        {/* {displayEmployees.map(employee => {
                            return(
                                <tr>
                                    <td>{employee.picture.medium}</td>
                                    <td>{employee.name.first}</td>
                                    <td>{employee.name.last}</td>
                                    <td>{employee.cell}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.login.username}</td>
                                </tr>
                            )
                        })} */}
                    </body>
                </table>
            </div>
        )
    }

}
export default Table;