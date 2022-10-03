import React from "react";
import "./Skills.scss";
import SkillsName from "../../data/skills.json";
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className="Skills">
            <div className="Skills__container">
                <h2 className="Skills__title">
                    —————————————<span>Compétences techniques</span>—————————————
                </h2>

                <div className="Skills__content">
                    {SkillsName.map((skill) => (
                        <Skill name={skill.name} value={skill.value} image={skill.image} className="Skills__content--skill" key={Math.random()} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
