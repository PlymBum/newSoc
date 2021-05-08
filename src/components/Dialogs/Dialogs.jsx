import React from "react";
import styles from "./Dialogs.module.css"
import Message from "./Messages/Message";
import User from "./Users/User";

const Dialogs = (props) => {

/*    let dialogs = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Jim'},
        {id: 3, name: 'Joan'},
        {id: 4, name: 'Jessie'}
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Good day'},
        {id: 4, message: 'Yo'}
    ]*/

    let dialogsItem=props.state.dialogs.map(dialog=><User name={dialog.name} id={dialog.id}/>)
    let messagesItem=props.state.messages.map(message=><Message message={message.message}/>)


    return (
        <div className={styles.content}>
            <div className={styles.dialogs}>
                {dialogsItem}
            </div>
            <div className={styles.messenges}>
                {messagesItem}
            </div>

        </div>
    )
}

export default Dialogs