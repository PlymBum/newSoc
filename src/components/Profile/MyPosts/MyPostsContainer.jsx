import React from "react";
import Post from "./Posts/Post";
import {connect} from "react-redux";
import Profile from "../Profile";
import MyPosts from "./MyPosts";



const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;