import { ESCORTS_LIST_FAIL, ESCORTS_LIST_REQUEST, ESCORTS_LIST_SUCCESS } from "../constants/escortConstants";


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

export {
    escortListReducer
}