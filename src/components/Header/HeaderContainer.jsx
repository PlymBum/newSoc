import React from "react";
import Header from "./Header";
import {authMe} from "../../redux/auth-reduser";
import {connect} from "react-redux";
import {authApi} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMe()
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

export default connect(mapStateToProps, {authMe})(HeaderContainer);