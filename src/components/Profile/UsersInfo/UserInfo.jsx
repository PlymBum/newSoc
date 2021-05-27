import React from "react";
import styles from "./UserInfo.module.css"
import Preloader from "../../common/Preloader";


const UserInfo = (props) => {

    {if (!props.profile){
       return <Preloader />
    }}

    return (
        <div className={styles.info}>
            <div>
                {/*<img src='https://ava-24.com/_ph/146/479768406.jpg'/>*/}
                <img src={props.profile.photos.small}/>
            </div>
            <div>
                <p>{props.profile.fullName}</p>
                <p>{props.profile.aboutMe}</p>
                <p>lookingForAJob - {props.profile.lookingForAJob?'yes':'no'}</p>
            </div>

        </div>
)
}

export default UserInfo;