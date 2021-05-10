import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendReducer from "./friend-reducer";
import {combineReducers, createStore} from "redux";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    friendsList: friendReducer
})

let store = createStore(reducers)

export default store