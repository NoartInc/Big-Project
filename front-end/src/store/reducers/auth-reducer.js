const initialState = {
    user: null,
    isLogin: true,
    token: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isLogin: true
            };
        case "authLogout":
            return {
                ...state,
                ...initialState
            }
            case "REGISTER_USER":
                return {
                    ...state,
                }
        
        default:
      return state;
    }
}

export default authReducer;