import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { changeAvatarReducer, changePasswordReducer, userSiginReducer } from './reducers/userReducers';
import { escortListReducer, escortRegisterReducer } from './reducers/escortReducers';
import { regionsListReducer } from './reducers/regionReducers';

const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = { userSignin: { userInfo } };

const reducer = combineReducers({
    escortList: escortListReducer,
    regionsList: regionsListReducer,
    escortRegister: escortRegisterReducer,
    userSignin: userSiginReducer,
    changePassword: changePasswordReducer,
    changeAvatar: changeAvatarReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;