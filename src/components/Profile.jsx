import React from "react";
import styles from "./Profile.module.css"

const Profile = () => {
    return (
        <div className={styles.content}>
            <img
                src="https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg"/>
            <div>
                ava+description
            </div>
            <div>
                <div>My posts</div>
                <div><textarea className={styles.input}></textarea></div>
                <button className={styles.button}>Send</button>

            </div>
            <div>

                <div className={styles.item}>
                    Hello. I`m using this
                </div>
                <div className={styles.item}>
                    New round
                </div>
                <div className={styles.item}>
                    My first post
                </div>
            </div>
        </div>
    )
}

export default Profile;