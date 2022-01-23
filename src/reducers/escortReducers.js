import { ESCORTS_LIST_FAIL, ESCORTS_LIST_REQUEST, ESCORTS_LIST_SUCCESS, ESCORT_REGISTER_FAIL, ESCORT_REGISTER_REQUEST, ESCORT_REGISTER_SUCCESS } from "../constants/escortConstants";


function escortListReducer(state = { escorts: [] }, action) {
    switch (action.type) {
        case ESCORTS_LIST_REQUEST:
            return { loading: true, escorts: [] };
        case ESCORTS_LIST_SUCCESS:
            return { loading: false, escorts: action.payload };
        case ESCORTS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function escortRegisterReducer(state = {}, action) {
    switch (action.type) {
        case ESCORT_REGISTER_REQUEST:
            return { loading: true };
        case ESCORT_REGISTER_SUCCESS:
            return { loading: false, escortInfo: action.payload };
        case ESCORT_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export {
    escortListReducer,
    escortRegisterReducer
}