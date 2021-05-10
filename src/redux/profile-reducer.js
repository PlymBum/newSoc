export const addPostActionCreator=()=>({type: "ADD-POST"})
export const updatePostTextActionCreator=(text)=>({type: "UPDATE-POST-TEXT", newText: text})

const profileReducer = (state, action) => {
    switch (action.type) {
        case  "ADD-POST":
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 200,
                avatar: "https://ava-24.com/_ph/146/479768406.jpg"
            }
            state.newPostText = ""
            state.posts.push(newPost)
            console.log("add " + state.newPostText)
            return state


        case "UPDATE-POST-TEXT":

            state.newPostText = action.newText
            console.log("update " + state.newPostText)
            return state
        default:
            return state
    }

    return state
}

export default profileReducer