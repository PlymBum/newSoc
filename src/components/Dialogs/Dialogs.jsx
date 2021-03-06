import React from "react";
import styles from "./Dialogs.module.css"
import Message from "./Messages/Message";
import User from "./Users/User";
import {Redirect} from 'react-router-dom'
import NewMessage from "./Messages/NewMessage/NewMessage";
import NewMessageContainer from "./Messages/NewMessage/NewMessageContainer";



const Dialogs = (props) => {

    let dialogsItem = props.dialogs.map(dialog => <User key={dialog.id} name={dialog.name} id={dialog.id}/>)
    let messagesItem = props.messages.map(message => <Message key={message.id} message={message.message} className={message.className} avatar={message.avatar}/>)

    return (
        <div className={styles.content}>
            <div className={styles.dialogs}>
                {dialogsItem}
            </div>
            <div className={styles.messages}>
                {messagesItem}
            </div>
            <div className={styles.newMessage}>
                <NewMessageContainer/>

            </div>

        </div>
    )
}

export default Dialogs