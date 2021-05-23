import React from "react";
import {connect} from "react-redux";
import {followAc, setUsers, setUsersAC, unfollowAc} from "../../redux/users-reducer";
import Users from "./Users";


const mapStateToProps = (state) => {
   return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow:(userId)=>dispatch(followAc(userId)),
        unfollow:(userId)=>dispatch(unfollowAc(userId)),
        setUsers:(users)=>dispatch(setUsersAC(users))

    }
}


const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer