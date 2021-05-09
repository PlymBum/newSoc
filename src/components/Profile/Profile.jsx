import React from "react";
import styles from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UsersInfo/UserInfo";
import PostCreate from "./PostCreate/PostCreate";

const Profile = (props) => {
        return (

        <div className={styles.content}>
            <UserInfo/>
            <PostCreate addPost={props.addPost}
                        newPostText={props.profile.newPostText}
                        updatePostText={props.updatePostText}/>
            <MyPosts posts={props.profile.posts}/>
        </div>
    )
}

export default Profile;