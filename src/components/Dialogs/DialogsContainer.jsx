import React from "react";
import styles from "./Dialogs.module.css"
import Message from "./Messages/Message";
import User from "./Users/User";
import NewMessage from "./Messages/NewMessage/NewMessage";
import NewMessageContainer from "./Messages/NewMessage/NewMessageContainer";
import {connect} from "react-redux";
import Profile from "../Profile/Profile";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer