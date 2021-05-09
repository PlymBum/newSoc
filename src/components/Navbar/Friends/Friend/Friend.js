import React from "react";


let Friend = (props) => {


    return (
        <div >
            <div>
                <img src={props.avatar}/>
            </div>
            <div>
                {props.name}
            </div>
        </div>
    )
}

export default Friend

