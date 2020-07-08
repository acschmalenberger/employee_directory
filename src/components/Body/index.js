import React, {Component} from "react";

import Search from "../Search"
import TableHeader from "../TableHeader"
import TableRow from "../TableRow"

import api from "../../utils/api"

class Body extends Component {
    employeeData = api
    state = {
        data: this.employeeData,
        search: "",
        filterList: []
    };

    componentDidMount() {
        api.getEmployee()
            .then(res => this.setState({ 
                result: res.data.results, 
                filterList: res.data.results
            }))
            .catch(err => console.log(err));
    }

    handleInputChange = (event) => {
        const value = event.target.value
        const lastName= event.target.last
        this.setState ({
            [lastName]:value
        });
    };

    handleFormSubmit = (event) =>{
        event.preventDefault();
        this.searchEmployee(this.state.search)
    }
    
    searchEmployee=()=>{
        api.getEmployee()
        .then(res => this.setState({
            filterList: res.data.results,
            result: res.data.results
        }))
        .catch(err => console.log(err))
    }

    render (){
        return(
            <div>
                <Search
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <table>
                    <TableHeader />

                    <tbody>
                        <TableRow />
                        
                    </tbody>
                    
                </table>

            </div>
        )
    }
}

export default Body