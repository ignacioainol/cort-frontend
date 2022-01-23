import axios from "axios";
import Cookie from 'js-cookie';
import { USER_SIGIN_FAIL, USER_SIGIN_REQUEST, USER_SIGIN_SUCCESS } from "../constants/userConstants";
import { API_REST } from "../constants/base_uri";

const signin = (loginData) => async (dispatch) => {
    const { email, password } = loginData;
    dispatch({ type: USER_SIGIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await axios.post(`${API_REST}users/signin`, { email, password });
        dispatch({ type: USER_SIGIN_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_SIGIN_FAIL, payload: error.message });
    }
}

export {
    signin
}