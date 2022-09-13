import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <Link className="navbar__link" to="/">
                    À propos
                </Link>
                <Link className="navbar__link" to="/projets">
                    Projets
                </Link>
                <Link className="navbar__link" to="/contact">
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
