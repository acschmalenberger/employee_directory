import React from "react";
import "./style.css";

function TableHeader (props) {

        return(
            <div>
                    <thead>
                        <tr>
                            <th scope= "col">Picture</th>
                            <th scope= "col">First Name</th>
                            <th scope= "col">Last Name </th>
                            <th scope= "col">Cell</th>
                            <th scope= "col">Email</th>
                            <th scope= "col">Username</th>
                        </tr>
                    </thead>
            </div>
        )
    }


export default TableHeader;