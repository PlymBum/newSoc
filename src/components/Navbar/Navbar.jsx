import React from "react";
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import FriendsList from "./Friends/FriendsList";
import FriendsListContainer from "./Friends/FriendsListContainer";

const Navbar = (props) => {

    return (
        <div>
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/profile' activeClassName={styles.activeLink}>Profiles</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/dialogs' activeClassName={styles.activeLink}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/news' activeClassName={styles.activeLink}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/music' activeClassName={styles.activeLink}>Musik</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/settings' activeClassName={styles.activeLink}>Settings</NavLink>
            </div>
        </nav>
            <FriendsListContainer/>
        </div>
    )
}

export default Navbar;