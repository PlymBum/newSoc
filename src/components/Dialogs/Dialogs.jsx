import React from "react";
import styles from "./Dialogs.module.css"
import Message from "./Messages/Message";
import User from "./Users/User";

const Dialogs = (props)=>{
    return(
        <div className={styles.content}>
            <div className={styles.dialogs}>
                <User name='John'/>
            </div>
            <div className={styles.messenges}>
                <Message message='Hello'/>
                <Message message='How are you?'/>
                <Message message='Good day'/>
            </div>

        </div>
    )
}

export default Dialogs