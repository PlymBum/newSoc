import React from "react";
import styles from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UsersInfo/UserInfo";
import PostCreate from "./PostCreate/PostCreate";
import PostCreateContainer from "./PostCreate/PostCreateContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (

        <div className={styles.content}>
            <UserInfo/>
            <PostCreateContainer/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;