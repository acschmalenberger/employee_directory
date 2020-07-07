import React from "react";
import api from "../../utils/api.js"


class Search extends React.Component {
    state = {
        search: ""
    }

    render(){
        return (
            <form>
                <input
                name = "search"
                type = "text"
                // value = {props.searchValue}
                onChange= {(event)=>
                    this.setState({search: event.target.value}
                )}
                ></input>
                <button type="submit"
                onClick = {(event) => {
                    event.preventDefault()
                    console.log(this.state.search)
                    }
                }
                >search
                </button>
            </form>
        )
    }
}

export default Search;