import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUsersProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {usersApi} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId;
        !this.props.match.params.id?userId=17311:userId = this.props.match.params.id;
debugger
        usersApi.getProfile(userId)
            .then(data => {
                debugger
                this.props.setUsersProfile(data)

            })
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

let withUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(withUrlProfileContainer)

