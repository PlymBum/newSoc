import React from "react";
import styles from "./NewMessage.module.css"

const NewMessage = (props) => {
    let newMessageElement = React.createRef()
    let sendMessage = () => {
        props.dispatch({type: "SEND-MESSAGE"})
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.dispatch({type: "UPDATE-MESSAGE-TEXT", newText: text})
    }

    return (
        <div>
            <div>
                <textarea ref={newMessageElement} className={styles.input} onChange={onMessageChange}
                          value={props.newMessageText}></textarea>
            </div>
            <button onClick={sendMessage} className={styles.button}>Send</button>
        </div>
    )
}

export default NewMessage;