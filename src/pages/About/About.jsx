import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import Headers from "../../components/Headers/Headers";
import Skills from "../../components/Skills/Skills";
import "./About.scss";

const About = () => {
    const handleScroll = (e) => {
        setTimeout(() => {}, 500);
    };
    return (
        <div className="bg" onScroll={(e) => handleScroll(e)}>
            <Headers />
            <AboutMe />
            <Skills className="Skills" />
        </div>
    );
};

export default About;
