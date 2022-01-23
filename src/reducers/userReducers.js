import { USER_SIGIN_FAIL, USER_SIGIN_REQUEST, USER_SIGIN_SUCCESS } from "../constants/userConstants";

function userSiginReducer(state = {}, action) {
    switch (action.type) {
        case USER_SIGIN_REQUEST:
            return { loading: true }
        case USER_SIGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_SIGIN_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export {
    userSiginReducer
}