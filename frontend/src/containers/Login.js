import React,{ useState } from 'react'
import './Login.scss';
import { useDispatch,useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/index';
const Login = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state=> state.auth.isAuthenticated)
    const [formData,setFormData] = useState({
        email:'',
        password:''
    });
    const { email,password } = formData;
    
    const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value});

    if(isAuthenticated){
        return <Redirect to="/"/>
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        try {
            console.log(email,password)
            dispatch(login(email,password))
        } catch (e) {
            
        }
    }
    
    return (
        <div className="login-container">
            <h1 className="login-title">Log In</h1>
            <div className="content">
                <div className="login-image">
                    <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/fill_in_mie5.svg" alt="Login" />
                </div>
                <div className="login-content">
                    <h3>Log into your account</h3>
                    <br/>
                    <label>Email</label>
                    <input className="login-email" name="email" type="email" required onChange={e=>onChange(e)} />

                    <label>Password</label>
                    <input type="password" name="password" required onChange={onChange} className="login-password" />

                    <button onClick={onSubmit}>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Login
