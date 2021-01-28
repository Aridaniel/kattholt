import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../img/logo_vertical.svg"

function Login() {
    return (
        <>
            <div className="login-container">
                <img src={Logo}/>
                <div className="log-in-text">
                    <h1>Log In</h1>
                    <label>Username</label>
                    <input type="text"/>
                    <label>password</label>
                    <input type="text"/>
                    <Link to="/dashboard">
                        <button type="submit">Sign in</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Login
