import React from "react";
import styles from "./MyPosts.module.css"

const MyPosts = () => {
    return (
        <div>
            <div className={styles.item}>
                Hello. I`m using this
            </div>
            <div className={styles.item}>
                New round
            </div>
            <div className={styles.item}>
                My first post
            </div>
        </div>
    )
}

export default MyPosts;