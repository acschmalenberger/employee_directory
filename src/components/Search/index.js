import React from "react";

function Search (props){
        return (
            <form>
                <div className="form-group countainer">
                    <input
                        name = "employee"
                        type = "text"
                        value = {props.search}
                        onChange = {props.handleInputChange}
                        placeholer = "Employee Name"
                        className="form-control text-center"
                        id="search"
                    />
                    <button type="submit"
                        onClick={props.handleFormSubmit} className= "btn btn-secondary">
                        Search
                    </button>
                </div>
            </form>
        )
}

    


export default Search;