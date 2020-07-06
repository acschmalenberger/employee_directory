import React from "react";
import Search from "../search/search.js"
// import "./style.css";

function Header() {
    return (
        <div className="jumbotron">
            <h1>Employee Directory</h1>
            <div>
                <div className="bold">Employee Search: </div>
                <Search />
            </div>
        </div>

    );
}

export default Header;