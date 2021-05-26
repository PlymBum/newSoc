import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import preloader from "../../assets/preloader/preloader.svg"
import Preloader from "../common/Preloader";


class UsersApiContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChange = (currentPage) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : <Users totalCount={this.props.totalCount}
                                                               users={this.props.users}
                                                               pageSize={this.props.pageSize}
                                                               currentPage={this.props.currentPage}
                                                               onPageChange={this.onPageChange}
                                                               follow={this.props.follow}
                                                               unfollow={this.props.unfollow}

                />}

            </>)

    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching
    }
}



export default connect(mapStateToProps, {
    follow,unfollow,setUsers,setTotalCount,setCurrentPage,toggleIsFetching
})(UsersApiContainer)


