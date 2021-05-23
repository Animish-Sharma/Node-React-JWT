import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import './Update.scss'
import { update } from '../actions/index';
import { Redirect } from 'react-router-dom'
const Update = (props) => {
    const user = useSelector(state=> state.auth.user)
    const isAuthenticated = useSelector(state=> state.auth.isAuthenticated)
    const [firstName,setFirstName] = useState(user ? user.firstName : null)
    const [lastName,setLastName] = useState(user ? user.lastName : null)
    const [email,setEmail] = useState(user ? user.email : '')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch();

    const onSubmit = (e) =>{
        e.preventDefault();

        console.log(firstName,lastName,email,password)

        dispatch(update(firstName,lastName,email,password,user._id));
        return props.history.push("/")
    }

    if(!isAuthenticated){
        return <Redirect to="/login"/>
    }

    return (
        <div className="update-container">
            <h2>Update Information</h2>
            <div>
                <div className="update-image">
                    <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Updated_resume_re_q1or.svg" alt="Update" />
                </div>
                <form onSubmit={onSubmit} className="update-content">
                    <h3>Update your account details</h3>
                    <br/>
                    <label>First Name</label>
                    <input
                    type="text" 
                    name="firstName"
                    value={firstName}
                    onChange={e=>setFirstName(e.target.value)} 
                    required className="update-firstName"
                    />
                    <label>Last Name</label>
                    <input
                    type="text" 
                    name="lastName"
                    value={lastName}
                    onChange={e=>setLastName(e.target.value)} 
                    required className="update-lastName"
                    />
                    <label>Email</label>
                    <input
                    type="email" 
                    name="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)} 
                    required className="update-email"
                    />
                    <label>Password</label>
                    <input
                    type="password" 
                    name="firstName"
                    placeholder="Enter a new password or type the old one"
                    onChange={e=>setPassword(e.target.value)} 
                    required className="update-firstName"
                    />
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update
