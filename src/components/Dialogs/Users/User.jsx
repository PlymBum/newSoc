import React from "react";
import styles from "./Dialogs.module.css"
import Message from "./Messages/Message";

const Dialogs = (props)=>{
    return(
        <div className={styles.content}>
            <div className={styles.dialogs}>
                <div className={styles.itemUser}>
                    user1
                </div>
                <div className={styles.itemUser}>
                    user2
                </div>
                <div className={styles.itemUser}>
                    user3
                </div>
                <div className={styles.itemUser}>
                    user3
                </div>
                <div className={styles.itemUser}>
                    user4
                </div>
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