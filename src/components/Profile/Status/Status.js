import React, {useState} from "react";
import {setUsersStatus} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

const Status = (props) => {

    let inputStatus = React.createRef()

    let [editMode, setEditMode] = useState(false)


    const trueEditMode = () => {
        setEditMode(editMode = true)
    }
    const falseEditMode = () => {
        props.setUsersStatus(inputStatus.current.value)
        setEditMode(editMode = false)
        console.log(inputStatus.current.value)
    }



    return <div>
        {!editMode && <span onDoubleClick={trueEditMode}> {props.status===null? "---":props.status}</span>}
        {editMode && <input ref={inputStatus}  onBlur={falseEditMode}/>}

    </div>
}
const mapStateToProps = (state) => {
    return {
        status: state.profilePage.status
    }
}

export default connect(mapStateToProps, {setUsersStatus})(Status)

