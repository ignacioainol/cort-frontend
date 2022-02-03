import axios from "axios";
import Cookie from 'js-cookie';
import {
    CHANGE_PASSWORD_FAIL,
    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_SUCCESS,
    USER_LOGOUT,
    USER_SIGIN_FAIL,
    USER_SIGIN_REQUEST,
    USER_SIGIN_SUCCESS
} from "../constants/userConstants";
import { API_REST } from "../constants/base_uri";

const signin = (loginData) => async (dispatch) => {
    const { email, password } = loginData;
    dispatch({ type: USER_SIGIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await axios.post(`${API_REST}users/signin`, { email, password });
        dispatch({ type: USER_SIGIN_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        console.log(error);
        dispatch({
            type: USER_SIGIN_FAIL,
            payload:
                error.message && error.response.data.message
                    ? error.response.data.message :
                    error.message

        });
    }
}

const updatePassword = (changePasswordData) => async (dispatch) => {
    const { user_id, password, newPassword, confirmNewPassword } = changePasswordData;
    dispatch({ type: CHANGE_PASSWORD_REQUEST, payload: { user_id, password, newPassword, confirmNewPassword } });
    try {
        const { data } = await axios.post(`${API_REST}users/changePassword`, { user_id, password, newPassword, confirmNewPassword });
        dispatch({ type: CHANGE_PASSWORD_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: CHANGE_PASSWORD_FAIL,
            payload:
                error.message && error.response.data.message
                    ? error.response.data.message :
                    error.message

        });
    }
}

const signout = () => async (dispatch) => {
    Cookie.remove('userInfo');
    dispatch({ type: USER_LOGOUT });
    document.location.href = '/';
}

export {
    signin,
    updatePassword,
    signout
}