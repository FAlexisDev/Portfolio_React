import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import Headers from "../../components/Headers/Headers";
import "./About.scss";

const About = () => {
    return (
        <div className="bg">
            <Headers />
            <AboutMe />
        </div>
    );
};

export default About;
