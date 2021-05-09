import React from "react";
import styles from "./PostCreate.module.css"


const PostCreate = (props) => {
    let newPostElement = React.createRef()
    let addPost = () => props.dispatch({type: "ADD-POST"})


    let onPostChange = () => {
        let text = newPostElement.current.value

        props.dispatch({type: "UPDATE-POST-TEXT", newText: text})
    }

    return (
        <div>
            <div>
                <textarea ref={newPostElement} className={styles.input}
                          onChange={onPostChange}
                          value={props.newPostText}></textarea>
            </div>
            <button onClick={addPost} className={styles.button}>Send</button>
        </div>
    )
}

export default PostCreate;