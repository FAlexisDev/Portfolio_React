import React, { useState } from "react";
import "./Project.scss";
import ProjectData from "../../data/projects.json";
import TextBg from "../../assets/images/green_painted_small.png";

import Filters from "./Filters/Filters";

const Project = () => {
    return (
        <div className="project">
            <div className="project__title">
                <h2 className="project__title--text">Mes projets web 💻</h2>
                <img src={TextBg} alt="" className="project__title--image" />
            </div>
            <Filters className="filters" cardData={ProjectData} />
        </div>
    );
};

export default Project;
