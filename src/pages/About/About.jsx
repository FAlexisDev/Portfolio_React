import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import Headers from "../../components/Headers/Headers";
import Skills from "../../components/Skills/Skills";
import "./About.scss";

const About = () => {
    return (
        <div className="bg2">
            <Headers />
            <AboutMe />
            <Skills className="Skills" />
        </div>
    );
};

export default About;
