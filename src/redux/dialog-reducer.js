export const sendMessageActionCreator = () => ({type: "SEND-MESSAGE"})
export const updateMessageTextActionCreator = (text) => ({type: "UPDATE-MESSAGE-TEXT", newText: text})

const dialogReducer = (state, action) => {
    switch (action.type) {
        case "SEND-MESSAGE" :
            let newMessage = {
                id: 5,
                message: state.newMessageText,
                avatar: "https://ava-24.com/_ph/146/479768406.jpg",
                className: 'output'
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state


        case "UPDATE-MESSAGE-TEXT" :
            state.newMessageText = action.newText
            return state

        default:
            return state

    }

}
export default dialogReducer