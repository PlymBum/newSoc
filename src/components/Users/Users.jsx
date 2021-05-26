import React from "react";
import styles from "./Users.module.css";
import noAvatar from "../../assets/images/noAvatar.png";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= 20; i++) {  //вместо 20 должно быть pagesCount (как ограничить число страниц?)
        pages.push(i)
    }

    return <div>
        {pages.map(p => {
            return <span className={props.currentPage === p && styles.current}
                         onClick={(e) => props.onPageChange(p)}>{p}</span>
        })}

        {props.users.map(user => <div className={styles.user} key={user.id}>
            <div>
                <img className={styles.avatar} src={user.photos.small != null ? user.photos.small : noAvatar}/>

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
                        {"user.location.country"}
                    </div>
                    <div>
                        {"user.location.city"}
                    </div>
                </div>
            </div>
        </div>)}
    </div>

}

export default Users