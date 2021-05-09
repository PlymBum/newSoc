import React from "react";
import styles from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UsersInfo/UserInfo";
import PostCreate from "./PostCreate/PostCreate";

const Profile = (props) => {
    debugger
        return (

        <div className={styles.content}>
            <UserInfo/>
            <PostCreate/>
            <MyPosts posts={props.profile.posts}/>
        </div>
    )
}

export default Profile;