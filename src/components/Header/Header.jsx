import React from "react";
import styles from "./Header.module.css"

const Header =()=>{
    return (
        <header className={styles.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png"/>
        </header>
    )
}

export default Header;