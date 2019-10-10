import React from 'react'
import Login from '../../components/Auth/Login/Login'
import Register from '../../components/Auth/Register/Register'
import "./Auth.scss";

const Auth = () => {
    return (
        <div className="auth">
            <Login />
            <Register />
        </div>
    )
}

export default Auth;
