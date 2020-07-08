import React from "react";


function TableRow(props) {

    return (
        <div>
        {props.result.map(results =>(
            <tr>
                <td>{results.picture.medium}</td>
                <td>{results.name.first}</td>
                <td>{results.name.last}</td>
                <td>{results.cell}</td>
                <td>{results.email}</td>
                <td>{results.login.username}</td>
            </tr>
        ))}
        </div>

    )

};

export default TableRow