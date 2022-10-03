import React from "react";
import "./Project.scss";
import ProjectData from "../../data/projects.json";
import Filters from "./Filters/Filters";

const Project = () => {
    return (
        <div className="project">
            <div className="project__title">
                <h2 className="project__title--text">Mes projets web 💻</h2>
            </div>
            <Filters className="filters" cardData={ProjectData} />
        </div>
    );
};

export default Project;
