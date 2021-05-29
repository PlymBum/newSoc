import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUsersProfile} from "../../redux/profile-reducer";
import axios from "axios";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId /*= this.props.match.params.id*/;
        !this.props.match.params.id?userId=17311:userId = this.props.match.params.id;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                debugger
                this.props.setUsersProfile(response.data)

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

