import {authApi} from "../api/api";

const setAuthUserData = (id,email,login) => ({type: SET_AUTH_USER_DATA,data:{id,email,login}})
const setAuth = (isAuth) => ({type: SET_AUTH,isAuth})


const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"
const SET_AUTH = "SET_AUTH"


export const authMe = ()=>(dispatch)=>{
    authApi.me().then(data => {
        if (data.resultCode===0){
            dispatch(setAuth(true))
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })
}

let initialState = {
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false,
    isFetching: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SET_AUTH_USER_DATA: {

            return {
                ...state,
                data:{...action.data},
                isAuth: true
            }
        }
        case SET_AUTH:{
            return {
                ...state,
                isAuth: action.isAuth
            }
        }

        default:
            return state
    }

}

export default authReducer