import React, { Component } from 'react';
import axios from "axios";

export default class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersData: []

        }
    }
    componentDidMount() {
        axios("https://reqres.in/api/users?page=2").
            then(
                res => this.setState({ usersData: res.data.data }))
            .catch(function (error) {
                console.log(error)

            })
    }

    render() {
        return (
            <div style={{display:"flex",justifyContent:"center",justifyItems:"center"}}>
                <ol>
                    {this.state.usersData.map((data)=>
                    <li>{data.first_name + " " + data.last_name}</li>
                    )}
                    
                </ol>
            </div >
        )
    }
}
