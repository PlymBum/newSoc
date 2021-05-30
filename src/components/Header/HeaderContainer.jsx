import React from "react";
import Header from "./Header";
import axios from "axios";
import {setAuth, setAuthUserData} from "../../redux/auth-reduser";
import {connect} from "react-redux";
import {usersApi} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
           usersApi.authMe().then(data => {
                if (data.resultCode===0){
                    this.props.setAuth(true)
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {

        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.data.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setAuthUserData,setAuth})(HeaderContainer);