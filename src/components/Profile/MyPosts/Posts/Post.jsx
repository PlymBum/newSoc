import React from "react";
import styles from "./Post.module.css"

const Post = (props) => {
    return (
        <div>
            <div className={styles.item}>
                <img src={props.avatar}/>
               <span>{props.message}</span>
                <div>like {props.likesCount}</div>
            </div>
        </div>
    )
}

export default Post;