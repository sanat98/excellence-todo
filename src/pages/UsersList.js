import React, { Component } from 'react';
import axios from "axios";
//import ReactPaginate from 'react-paginate';
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
import "../UserList.css"

export default class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersData: [],
            itemsCountPerPage:"",
            totalItemsCount:"5",
            pageRangeDisplayed:"",
            activePage:1,

        }
        
    }
    componentDidMount() { 
        axios("https://reqres.in/api/users?page="+ this.state.activePage).
            then(
                res => this.setState({ usersData: res.data.data, itemsCountPerPage : res.data.per_page, totalItemsCount : res.data.total, pageRangeDisplayed : res.data.total_pages}))
            .catch(function (error) {
                console.log(error)

            })
    }
   

    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber }) ;
        this.componentDidMount();
    
    }
 

    render() {
        return (
            <>
                <div style={{ display: "flex", justifyContent: "center", justifyItems: "center" }}>
                    <ol>
                        {this.state.usersData.map((data) =>
                            <li>{data.first_name + " " + data.last_name}</li>
                        )}

                    </ol>
                </div >


                <div style={{ display: "flex", justifyContent: "center", justifyItems: "center" }}>
                
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.activePage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                        onChange={this.handlePageChange.bind(this)}
                    />
                </div>
            </>
        )
    }
}
