import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DowloadButton from "../../../assets/images/download-button.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import cv from "../../../assets/file/CV_fr.pdf";

const Navbar = () => {
    const [route, setRoute] = useState("");
    const [isMobileMenu, setIsMobileMenu] = useState(false);

    useEffect(() => {
        const currentRoute = window.location.pathname;
        setRoute(currentRoute);
    }, []);

    return (
        <div>
            <div className="navbar">
                <div className="navbar__cv">
                    <a className="navbar__cv--text" href={cv} target="_blank" download="CV_Alexis_Fontaine" rel="noreferrer">
                        <img src={DowloadButton} alt="" />
                        CV
                    </a>
                </div>
                <FontAwesomeIcon icon={faBars} className="navbar__bars" onClick={() => setIsMobileMenu(!isMobileMenu)} />
                <div className="navbar__desktop">
                    <Link className={route === "/" ? "navbar__link underline" : "navbar__link"} to="/">
                        À propos
                    </Link>
                    <Link className={route === "/projects" ? "navbar__link underline" : "navbar__link"} to="/projects">
                        Projets
                    </Link>
                    <Link className={route === "/contact" ? "navbar__link underline" : "navbar__link"} to="/contact">
                        Contact
                    </Link>
                </div>

                {isMobileMenu ? (
                    <div className="navbar__menu">
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
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Navbar;
