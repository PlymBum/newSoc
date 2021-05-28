import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendReducer from "./friend-reducer";
import {combineReducers, createStore} from "redux";
import {usersReducer} from "./users-reducer";
import authReducer from "./auth-reduser";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    friendsList: friendReducer,
    usersPage: usersReducer,
    auth:authReducer
})

let store = createStore(reducers)

export default store