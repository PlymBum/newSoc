import React from "react";
import styles from "./Message.module.css"

const Message = (props) => {
    return (
        <div>

            <div className={styles.messenges}>
                <div className={`${styles.itemMessage} ${props.style}`}>
                    {props.message}
                </div>
            </div>
        </div>
    )
}

export default Message