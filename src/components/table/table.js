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
                table
            </div>
        )
    }

}
export default Table;