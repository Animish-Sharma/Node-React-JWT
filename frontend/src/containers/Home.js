import React from 'react'
import './Home.scss';
import welcome from '../assets/welcome.svg'
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { logout } from '../actions/index';
const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector(state=>state.auth.user);
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated);


    const guest = (
        <div className="guest-container">
            <div className="guest-image">
                <img src={welcome} alt="Welcome" />
            </div>
            <div className="guest-content">
                <h2>Welcome to Node React JWT</h2>
                <p>On This site you can login,register. If you entered any detail incorrectly you can also update your details</p>
                <div className="guest-links">
                    <Link className="guest-login" to="/login">Login</Link>
                    <Link className="guest-register" to="/register">Register</Link> 
                </div>
                
            </div>
        </div>
    )
    const auth =(
        <div className='auth-container'>
            <div className="auth-image">
                <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/welcome_3gvl.svg" alt="User Welcome" />
            </div>
            <div className="auth-content">
                <h2>Welcome {user ? user.firstName : null} { user ? user.lastName : null} to Node React JWT</h2>
                <p>You have successfully signed in and now you can update your information or logout</p>
                <div className="auth-links">
                    <Link className="auth-update" to="/update">Update Info</Link>
                    <button className="auth-logout" onClick={()=>dispatch(logout())}>Logout</button> 
                </div>
            </div>
        </div>
    )
    return (
        <div className="home-container">
            {isAuthenticated  ? auth : guest}
            <h2 className="made-by">Made By Animish Sharma</h2>
        </div>
    )
}

export default Home
