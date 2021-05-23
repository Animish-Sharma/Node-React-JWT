import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    UPDATE_FAIL,
    UPDATE_SUCCESS,
    LOGOUT
} from '../actions/types';


const initialState = {
    token: localStorage.getItem('token') || null,
    user:JSON.parse(localStorage.getItem('user')) || null,
    isAuthenticated: localStorage.getItem('token') ? true : false
}

export default function auth(state=initialState,action){
    const { type,payload } = action;

    switch(type){
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        case UPDATE_SUCCESS:
            localStorage.setItem('token',payload.token);
            localStorage.setItem('user',JSON.stringify(payload.user));
            return{
                ...state,
                isAuthenticated:true,
                token:payload.token,
                user:payload.user
            }
        case LOGOUT:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case UPDATE_FAIL:
            return{
                ...state,
                isAuthenticated:false,
                token:null,
                user:null
            }
        default:
            return state

    }
}