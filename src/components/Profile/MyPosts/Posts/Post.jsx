import React from "react";
import styles from "./Post.module.css"

const Post = (props) => {
    return (
        <div>
            <div className={styles.item}>
                <img src='https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg'/>
               <span>{props.message}</span>
                <div>like {props.likes}</div>
            </div>
        </div>
    )
}

export default Post;