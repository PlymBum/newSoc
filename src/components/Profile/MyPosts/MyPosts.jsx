import React from "react";
import Post from "./Posts/Post";

const MyPosts = (props) => {

    let postElements=props.posts.map(post=><Post key={post.id} message={post.message} likesCount={post.likesCount} avatar={post.avatar}/>)

    return (
        <div>
            {postElements}
        </div>

    )
}

export default MyPosts;