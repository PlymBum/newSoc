import React from "react";
import styles from "./PostCreate.module.css"

const PostCreate = (props) => {
    let newPostElement=React.createRef()
    let addPost=()=>{

        let text=newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value=""
    }

    return (
        <div>
            <div>
                <textarea ref={newPostElement} className={styles.input}></textarea>
            </div>
            <button onClick={addPost} className={styles.button}>Send</button>
        </div>
    )
}

export default PostCreate;