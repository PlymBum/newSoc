export const setAuthUserData = (id,email,login) => ({type: SET_AUTH_USER_DATA,data:{id,email,login}})
export const setAuth = (isAuth) => ({type: SET_AUTH,isAuth})


const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"
const SET_AUTH = "SET_AUTH"

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