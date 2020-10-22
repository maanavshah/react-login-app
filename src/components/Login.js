import React from 'react'

function Login(props) {
    return (
        <div>
            { props.loggedIn ? "Logged In" : "LoggedOut"}
            <button
                onClick={() => props.handleClick()}>
                {props.loggedIn ? "Logout" : "Login"}
            </button>
        </div>
    )

}

export default Login
