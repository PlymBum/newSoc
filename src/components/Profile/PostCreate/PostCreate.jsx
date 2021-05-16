import React from "react";
import styles from "./PostCreate.module.css"


const PostCreate = (props) => {
    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.onAddPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.onPostChange(text)
    }

    return (
        <div>
            <div>
                <textarea ref={newPostElement} className={styles.input}
                          onChange={onPostChange}
                          value={props.newPostText}></textarea>
            </div>
            <button onClick={onAddPost} className={styles.button}>Send</button>
        </div>
    )
}

export default PostCreate;