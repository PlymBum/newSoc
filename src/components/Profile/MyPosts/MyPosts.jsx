import React from "react";
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div>
            <Post message='Hello, its my first props' likes='15'/>
            <Post message='I like this' likes='20'/>
        </div>

    )
}

export default MyPosts;