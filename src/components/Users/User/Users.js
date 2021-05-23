import React from "react";
import styles from "./Users.module.css"

const Users = (props) => {
    return <div>
                {props.users.map(user =><div className={styles.user} key={user.id}>
                <div>
                    <img className={styles.avatar} src={user.avatar}/>

                    {user.followed ?
                        <button onClick={() => props.unfollow(user.id)}>unfollow</button>
                        : <button onClick={() => props.follow(user.id)}>follow</button>}

                </div>

                <div className={styles.info}>
                    <div className={styles.name}>
                        {user.name}
                    </div>
                    <div className={styles.status}>
                        {/*{props.status}*/}
                        тут будет статус
                    </div>
                    <div className={styles.location}>
                        <div>
                            {user.location.country}
                        </div>
                        <div>
                            {user.location.city}
                        </div>
                    </div>
                </div>
            </div>)}
    </div>
}

export default Users