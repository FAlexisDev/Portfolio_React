import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DowloadButton from "../../../assets/images/download-button.png";
import "./Navbar.scss";

const Navbar = () => {
    const [route, setRoute] = useState("");

    useEffect(() => {
        const currentRoute = window.location.pathname;
        setRoute(currentRoute);
    }, []);

    return (
        <div>
            <div className="navbar">
                <div className="navbar__cv">
                    <Link className="navbar__cv--text" to="/file/CV.pdf" target="_blank" download>
                        <img src={DowloadButton} alt="" />
                        Mon CV
                    </Link>
                </div>

                <Link className={route === "/" ? "navbar__link underline" : "navbar__link"} to="/">
                    À propos
                </Link>
                <Link className={route === "/projets" ? "navbar__link underline" : "navbar__link"} to="/projets">
                    Projets
                </Link>
                <Link className={route === "/contact" ? "navbar__link underline" : "navbar__link"} to="/contact">
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
