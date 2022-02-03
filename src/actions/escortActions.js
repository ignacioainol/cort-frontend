import { API_REST } from "../constants/base_uri";
import { ESCORTS_LIST_FAIL, ESCORTS_LIST_REQUEST, ESCORTS_LIST_SUCCESS, ESCORT_REGISTER_FAIL, ESCORT_REGISTER_REQUEST, ESCORT_REGISTER_SUCCESS } from "../constants/escortConstants";
import axios from 'axios';
import Cookie from 'js-cookie';

const listEscorts = () => async (dispatch) => {
    try {
        dispatch({ type: ESCORTS_LIST_REQUEST });
        const { data } = await axios.get(`${API_REST}users/escorts`);
        dispatch({ type: ESCORTS_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ESCORTS_LIST_FAIL, payload: error.message });
    }
}

const registerEscort = (escort) => async (dispatch) => {
    try {
        dispatch({ type: ESCORT_REGISTER_REQUEST, payload: escort });

        const { data } = await axios.post(`${API_REST}users/escorts`, escort);
        dispatch({ type: ESCORT_REGISTER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ESCORT_REGISTER_FAIL, payload: error.message });
    }
}

export { listEscorts, registerEscort }