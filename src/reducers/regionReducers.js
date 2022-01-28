import { REGIONS_LIST_FAIL, REGIONS_LIST_REQUEST, REGIONS_LIST_SUCCESS } from "../constants/regionConstants";


function regionsListReducer(state = { regions: [] }, action) {
    switch (action.type) {
        case REGIONS_LIST_REQUEST:
            return { loading: true, regions: [] };
        case REGIONS_LIST_SUCCESS:
            return { loading: false, regions: action.payload };
        case REGIONS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export {
    regionsListReducer
}