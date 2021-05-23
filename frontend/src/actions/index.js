import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    UPDATE_SUCCESS,
    UPDATE_FAIL,
    LOGOUT
} from './types'
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux'


export const login = (email,password)=>async dispatch=>{
    try {
        const config={
            headers:{
                "Content-Type": "application/json"
            }
        }
        const body = JSON.stringify({ email,password })
        const res = await axios.post('http://localhost:3000/users/login/',body,config);
        console.log(res.data)
        
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
        
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL
        })
    }
}

export const register = (firstName,lastName,email,password) =>async dispatch=>{
    try{
        const config={
            headers:{
                "Content-Type": "application/json"
            }
        };
        const body = JSON.stringify({ firstName,lastName,email,password});
        const res = await axios.post('http://localhost:3000/users/register/',body,config);
        console.log(res.data)

        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        });
    }catch(e){
        dispatch({
            type:REGISTER_FAIL
        })
    }
};

export const logout = () =>dispatch=>{
    dispatch({
        type:LOGOUT
    })
}

export const update = (firstName,lastName,email,password,id) =>async dispatch=>{
    try {
        const config = {
            headers:{
                'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            }
        };
        const body = JSON.stringify({ firstName, lastName, email,password})
        const res = await axios.put(`http://localhost:3000/users/update/${id}/`,body,config)
        console.log(res)
        dispatch(login(email,password))
        
    } catch (error) {
        dispatch({
            type:UPDATE_FAIL
        });
        console.log(error)
    }

}