import React from "react";
import Friend from "./Friend/Friend";
import styles from "./Friend/Friend.module.css"


let FriendsList=(props)=>{


    let friendsItem=props.friendsList.map(friend=><Friend key={friend.id} name={friend.name} avatar={friend.avatar} />)



    return (
        <div className={styles.item}>
            {friendsItem}
        </div>

    )
}

export default FriendsList