import React from "react";


function TableRow(props) {

    return (
        <div>
            <tr>
                <td>{props.result.picture.medium}</td>
                <td>{props.result.name.first}</td>
                <td>{props.result.name.last}</td>
                <td>{props.result.cell}</td>
                <td>{props.result.email}</td>
                <td>{props.result.login.username}</td>
            </tr>
        </div>

    )

};
//employee.map? row.map... sometihing


export default TableRow