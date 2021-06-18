import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {WithAuthRedirectComponent} from "../hoc/WithAuthRedirectComponent";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}



export default compose(
    WithAuthRedirectComponent,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)