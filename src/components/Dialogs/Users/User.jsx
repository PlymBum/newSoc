import React from "react";
import styles from "./User.module.css"
import {NavLink} from "react-router-dom";

const User = (props) => {

    return (
        <div className={styles.dialogs}>
            <div className={styles.itemUser}>
                <NavLink to={"/dialogs/" + props.id} activeClassName={styles.activeLink}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default User