import React from "react";
import styles from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UsersInfo/UserInfo";
import PostCreate from "./PostCreate/PostCreate";
import PostCreateContainer from "./PostCreate/PostCreateContainer";
import {connect} from "react-redux";
import FriendsList from "../Navbar/Friends/FriendsList";
import Profile from "./Profile";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ProfileContainer;