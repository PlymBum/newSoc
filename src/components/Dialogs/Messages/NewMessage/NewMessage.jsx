import React from "react";
import styles from "./NewMessage.module.css"


const NewMessage = (props) => {
    let newMessageElement = React.createRef()

    let sendMessage = () => {
        props.sendMessage()
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.onMessageChange(text)
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