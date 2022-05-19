import { postRequest } from "../../utils/api"

export const register = (data) => {
    return (dispatch) => {
        postRequest('/auth/register', data)
        .then(res => {
            dispatch({
                type: 'REGISTER_USER',
                payload: res
            })
        })
        .catch((err) => {
            console.error(err)
        })
    }
}

export const login = (data) => {
    return (dispatch) => {
        postRequest('/auth/login', data)
        .then(res => {
            dispatch({
                type: 'LOGIN_USER',
                payload: res.data
            })
            if (res.status) {
                window.open("/", "_self");
            }
            // window.localStorage.setItem('userData', JSON.stringify(res.data))
        })
        .catch((err) => {
            alert(err.response.data.error)
        })
    }
}