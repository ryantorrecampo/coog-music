import React from "react";
import "./Landing.scss";
import Login from "./Login.js";
const Landing = () => {
    return (
        <div className="landing-container">
            <div className="header-container">
                <div className="home-container">Coog Music</div>
                <div className="btn-group">
                    <div>
                        <button className="btn btn--1">Sign in</button>
                    </div>
                    <div>
                        <button className="btn btn--2">Sign up</button>
                    </div>
                </div>
            </div>
            <div className="content-container">
                <div className="description">
                    <div className="desc-text">
                        <p>
                            A music streaming platform made for the University
                            of Houston
                        </p>
                        <p>
                            Upload and stream music for other students and
                            alumni to discover. With Coog Music, artists and
                            creators within the University of Houston can easily
                            share and connect with each other through their music.
                        </p>
                    </div>
                </div>
                <div className="login-menu-container">
                    <Login />
                </div>
            </div>
            <div className="footer-container">
                <div className="info">
                    <h5> © 2020, Coog Music, Inc.</h5>
                </div>
            </div>
        </div>
    );
};

export default Landing;
