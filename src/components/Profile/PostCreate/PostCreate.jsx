import React from "react";
import styles from "./MyPosts.module.css"
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea className={styles.input}></textarea>
            </div>
            <button className={styles.button}>Send</button>
            <Post message='Hello, its my first props' likes='15'/>
            <Post message='I like this' likes='20'/>

        </div>

    )
}

export default MyPosts;