import React from "react";
import styles from "./Profile.module.css"
import UserInfo from "./UsersInfo/UserInfo";
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