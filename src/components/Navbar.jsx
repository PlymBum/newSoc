import React from "react";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <a>Profiles</a>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <a>Messages</a>
            </div>
            <div className={styles.item}>
                <a>News</a>
            </div>
            <div className={styles.item}>
                <a>Musik</a>
            </div>
            <div className={styles.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;