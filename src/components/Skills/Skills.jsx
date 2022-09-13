import React from "react";
import "./Skills.scss";
import TextBg from "../../assets/images/green_painted_small.png";

const Skills = () => {
    return (
        <div className="Skills">
            <h2 className="Skills__title">
                —————————————<span>Compétences techniques</span>—————————————
            </h2>
            <img src={TextBg} alt="" className="Skills__image" />
        </div>
    );
};

export default Skills;
