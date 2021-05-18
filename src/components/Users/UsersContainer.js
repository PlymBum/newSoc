import React from "react";
import {connect} from "react-redux";
import Users from "./Users";


const mapStateToProps = (state) => {
    debugger
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}


const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer