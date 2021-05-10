import React from "react";
import styles from "./Dialogs.module.css"
import Message from "./Messages/Message";
import User from "./Users/User";
import NewMessage from "./Messages/NewMessage/NewMessage";



const Dialogs = (props) => {
debugger
    let dialogsItem = props.dialogPage.dialogs.map(dialog => <User name={dialog.name} id={dialog.id}/>)
    let messagesItem = props.dialogPage.messages.map(message => <Message message={message.message} className={message.className} avatar={message.avatar}/>)


    return (
        <div className={styles.content}>
            <div className={styles.dialogs}>
                {dialogsItem}
            </div>
            <div className={styles.messages}>
                {messagesItem}
            </div>
            <div className={styles.newMessage}>
                <NewMessage newMessageText={props.dialogPage.newMessageText}
                    dispatch={props.dispatch}/>

            </div>

        </div>
    )
}

export default Dialogs