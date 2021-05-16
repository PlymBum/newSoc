import React from "react";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../../../redux/dialog-reducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogPage.newMessageText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => dispatch(sendMessageActionCreator()),
        onMessageChange: (text) => dispatch(updateMessageTextActionCreator(text))
    }
}


const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)

export default NewMessageContainer;