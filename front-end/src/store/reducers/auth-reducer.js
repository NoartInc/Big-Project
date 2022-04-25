const initialState = {
    user: null,
    isLogin: true,
    token: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case "authLogin":
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
        
        default:
      return state;
    }
}

export default authReducer;