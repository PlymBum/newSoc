import React from "react";
import styles from "./Message.module.css"

const Message = (props) => {
    return (
        <div>
            <div className={styles.messages}>
                <div className={props.className === "input" ? styles.input : styles.output}>
                    {props.message}
                    <div>
                        <img src={props.avatar}/>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Message