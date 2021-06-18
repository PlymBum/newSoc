import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {WithAuthRedirectComponent} from "../hoc/WithAuthRedirectComponent";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId;
        !this.props.match.params.id?userId=17311:userId = this.props.match.params.id;

        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
}


export default compose(
    connect(mapStateToProps, {getUserProfile}),
    WithAuthRedirectComponent,
    withRouter
)(ProfileContainer)