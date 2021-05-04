import React from "react";
import styles from "./UserInfo.module.css"


const UserInfo = () => {
    return (
        <div className={styles.info}>
            <div>
                <img src='https://ava-24.com/_ph/146/479768406.jpg'/>
            </div>
            <div>
                <p>Plym Bum</p>
                <p>Junior React Developer</p>
            </div>

        </div>
)
}

export default UserInfo;