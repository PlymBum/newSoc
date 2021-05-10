import React from "react";
import styles from "./PostCreate.module.css"
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";



const PostCreate = (props) => {
    let newPostElement = React.createRef()
    let addPost = () => props.dispatch(addPostActionCreator())


    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updatePostTextActionCreator(text))
    }
debugger
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