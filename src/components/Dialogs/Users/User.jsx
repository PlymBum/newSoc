import React from "react";
import styles from "./User.module.css"


const User = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.itemUser}>
                {props.name}
            </div>
        </div>
    )
}

export default User