import React from "react";
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png"/>
            <div className={styles.authInfo}>
                {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;