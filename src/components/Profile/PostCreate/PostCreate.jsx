import React from "react";
import styles from "./PostCreate.module.css"

const PostCreate = () => {
    return (
        <div>
            <div>
                <textarea className={styles.input}></textarea>
            </div>
            <button className={styles.button}>Send</button>
        </div>
    )
}

export default PostCreate;