import React from "react";
import User from "./User/User";



const Users = (props) => {
debugger
    let userElement=props.users.map(user=><User name={user.name} avatar={user.avatar} location={user.location}/>)

    return (
        <div>{userElement}</div>
    )
}

export default Users