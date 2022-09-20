import React from "react";
import "./Skills.scss";
import TextBg from "../../assets/images/green_painted_small.png";
import SkillsName from "../../data/skills.json";
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className="Skills">
            <h2 className="Skills__title">
                —————————————<span>Compétences techniques</span>—————————————
            </h2>
            <img src={TextBg} alt="" className="Skills__image" />
            <div className="Skills__content">
                {SkillsName.map((skill) => (
                    <Skill name={skill.name} value={skill.value} image={skill.image} className="Skills__content--skill" />
                ))}
            </div>
        </div>
    );
};

export default Skills;
