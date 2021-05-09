import React from "react";
import styles from "./NewMessage.module.css"

const NewMessage = (props) => {
    let newMessageElement=React.createRef()
    let sendMessage=()=>{
        let text=newMessageElement.current.value
        props.sendMessage(text)
        newMessageElement.current.value=''
    }

    return (
        <div>
            <div>
                <textarea ref={newMessageElement} className={styles.input}></textarea>
            </div>
            <button onClick={sendMessage} className={styles.button}>Send</button>
        </div>
    )
}

export default NewMessage;