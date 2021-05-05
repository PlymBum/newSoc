import React from "react";
import styles from "./Dialogs.module.css"
import Message from "./Messages/Message";
import User from "./Users/User";

const Dialogs = (props) => {

    let dialogData = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Jim'},
        {id: 3, name: 'Joan'},
        {id: 4, name: 'Jessie'}
    ]

    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Good day'},
        {id: 4, message: 'Yo'}
    ]

    return (
        <div className={styles.content}>
            <div className={styles.dialogs}>
                <User name={dialogData[0].name} id={dialogData[0].id}/>
                <User name={dialogData[1].name} id={dialogData[1].id}/>
                <User name={dialogData[2].name} id={dialogData[2].id}/>
                <User name={dialogData[3].name} id={dialogData[3].id}/>
            </div>
            <div className={styles.messenges}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
            </div>

        </div>
    )
}

export default Dialogs