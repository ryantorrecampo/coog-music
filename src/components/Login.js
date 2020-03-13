import React from "react";
import "./Login.scss";

const Login = props => {
    return (
        <div className="login-container">
            <div className="title-container">
                <h1>Sign in</h1>
            </div>
            <div class="email-input">
                <input type="email" placeholder="student@uh.edu" />
                <svg viewBox="0 0 18 18">
                    <path d="M11.5,10.5 C6.4987941,17.5909626 1,3.73719105 11.5,6 C10.4594155,14.5485365 17,13.418278 17,9 C17,4.581722 13.418278,1 9,1 C4.581722,1 1,4.581722 1,9 C1,13.418278 4.581722,17 9,17 C13.418278,17 17,13.42 17,9"></path>
                    <polyline points="5 9.25 8 12 13 6"></polyline>
                </svg>
            </div>
            <div class="email-input">
                <input type="password" placeholder="••••••••" />
                <svg viewBox="0 0 18 18"></svg>
            </div>
            <div className="submit-btn-group">
                <div>
                    <button className="btn btn--1">Sign in</button>
                </div>
                <div>
                    <button className="btn btn--2">Forgot password?</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
