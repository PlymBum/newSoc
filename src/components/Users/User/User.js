import React from "react";
import styles from "./User.module.css"

const User = (props) => {

    return (
        <div className={styles.user}>
            <img className={styles.avatar} src={props.avatar}/>
            <div className={styles.info}>
                <div className={styles.name}>
                    {props.name}
                </div>
                <div className={styles.status}>
                    {/*{props.status}*/}
                    тут будет статус
                </div>
                <div className={styles.location}>
                    <div>
                        {props.location.country}
                    </div>
                    <div>
                        {props.location.city}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User