import React from "react";
import styles from "./NewMessage.module.css"

const NewMessage = () => {
    let newMessageElement=React.createRef()
    let sendMessage=()=>{
        let text=newMessageElement.current.value
        alert(text)
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