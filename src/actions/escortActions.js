import { API_REST } from "../constants/base_uri";
import { ESCORTS_LIST_FAIL, ESCORTS_LIST_REQUEST, ESCORTS_LIST_SUCCESS } from "../constants/escortConstants";
import axios from 'axios';

const listEscorts = () => async (dispatch) => {
    try {
        dispatch({ type: ESCORTS_LIST_REQUEST });
        const { data } = await axios.get(`${API_REST}users/escorts`);
        dispatch({ type: ESCORTS_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ESCORTS_LIST_FAIL, payload: error.message });
    }
}

export { listEscorts }