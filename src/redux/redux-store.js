import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendReducer from "./friend-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {usersReducer} from "./users-reducer";
import authReducer from "./auth-reduser";
import thunkMiddleware from "redux-thunk"



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    friendsList: friendReducer,
    usersPage: usersReducer,
    auth:authReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store