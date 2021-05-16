import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import PostCreate from "./PostCreate";
import {connect} from "react-redux";


let mapStateToProps=(state)=>{
    return {
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        onPostChange: (text)=>dispatch(updatePostTextActionCreator(text)),
        onAddPost:()=>dispatch(addPostActionCreator())
    }
}


const PostCreateContainer=connect(mapStateToProps,mapDispatchToProps)(PostCreate)

export default PostCreateContainer;