import React from "react";
import "./Headers.scss";
import BgImage from "../../assets/images/green_painted_background.png";
import Navbar from "./Navbar/Navbar";

const Headers = () => {
    return (
        <div className="header">
            <div className="title">
                <h1 className="title__text">Portfolio.</h1>
                <img src={BgImage} alt="" className="title__image" />
            </div>
            <Navbar />
        </div>
    );
};

export default Headers;
