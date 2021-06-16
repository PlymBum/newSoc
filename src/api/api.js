import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'f07ae418-3eb4-44c0-8959-1f57cacbd24a'
    }
})


export let usersApi = {
    follow(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data.resultCode);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data.resultCode);
    },
    getUsers(pageSize = 5, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => {
            return response.data
        })
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
            debugger
            return response.data
        })
    }
}

export let authApi = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}
