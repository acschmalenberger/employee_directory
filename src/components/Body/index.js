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
        filterList: [],
        result: []
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
                        {this.state.result.map(item => {
                            return(<TableRow
                                //result is prop being passed to tablerow
                                //"result" must be refermced in table row to effectively pass it
                                result = {item}
                                // picture={results.picture.medium}
                                // firstName={results.name.first}
                                // lastName={results.name.last}
                                // cell={results.cell}
                                // email={results.email}
                                // username={results.login.username}
                                />
                                )
                        })}
                    
                        
                    </tbody>
                    
                </table>

            </div>
        )
    }
}

export default Body