import React,{ useState } from 'react'
import './Register.scss';
import { Redirect } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { register } from '../actions/index';
const Register = () => {
    const isAuthenticated = useSelector(state=> state.auth.isAuthenticated)
    const dispatch = useDispatch()
    const [formData,setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    })
    const { firstName,lastName,email,password } = formData;

    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value});

    const onSubmit=e=>{
        e.preventDefault();
        try {
            console.log(firstName,lastName,email,password)
            dispatch(register(firstName,lastName,email,password))
        } catch (e) {
            console.log(e)
        }
    }

    if(isAuthenticated) return <Redirect to="/"/>
    return (
        <div className="register-container">
            <h1>Register</h1>
            <div>
                <div className="register-image">
                    <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Helpful_sign_re_8ms5.svg"alt=""/>
                </div>
                <form onSubmit={onSubmit} className="register-content">
                    <h3>Register a new Account</h3>
                    <br/>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={onChange} required className="register-firstName" />
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={onChange} required className="register-lastName" />
                    <label>Email</label>
                    <input type="email" name="email" onChange={onChange} required className="register-email" />
                    <label>Password</label>
                    <input type="password" name="password" onChange={onChange} required className="register-password" />

                    <button>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register
