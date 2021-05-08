import React from "react";
import styles from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UsersInfo/UserInfo";
import PostCreate from "./PostCreate/PostCreate";

const Profile = (props) => {
    debugger
        return (

        <div className={styles.content}>
            <img className={styles.background}
                 src="https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg"/>
            <UserInfo/>
            <PostCreate/>

            <MyPosts posts={props.profile.posts}/>
        </div>
    )
}

export default Profile;