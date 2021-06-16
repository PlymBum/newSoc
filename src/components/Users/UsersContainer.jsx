import React from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    toggleIsFollowing,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {Redirect} from "react-router-dom";


class UsersApiContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onPageChange = (currentPage) => {
        this.props.getUsers(this.props.pageSize, currentPage)
        this.props.setCurrentPage(currentPage)
    }


    render() {
        if(!this.props.isAuth) return <Redirect to='/login' />;
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalCount={this.props.totalCount}
                       users={this.props.users}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChange={this.onPageChange}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
                       toggleIsFollowing={this.props.toggleIsFollowing}


                />

            </>)

    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth:state.auth.isAuth
    }
}


export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setTotalCount, setCurrentPage, toggleIsFetching, toggleIsFollowing, getUsers
})(UsersApiContainer)


