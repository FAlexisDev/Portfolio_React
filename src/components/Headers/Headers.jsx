import React from "react";
import "./Headers.scss";
import Navbar from "./Navbar/Navbar";

const Headers = () => {
    return (
        <div className="header">
            <div className="title">
                <h1 className="title__text">Portfolio.</h1>
            </div>
            <Navbar />
        </div>
    );
};

export default Headers;
