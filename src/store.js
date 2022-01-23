import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { escortListReducer, escortRegisterReducer } from './reducers/escortReducers';
import { userSiginReducer } from './reducers/userReducers';

const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = { userSignin: { userInfo } };

const reducer = combineReducers({
    escortList: escortListReducer,
    escortRegister: escortRegisterReducer,
    userSignin: userSiginReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;