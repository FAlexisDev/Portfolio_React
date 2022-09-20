import React, { useEffect, useState } from "react";
import "./Filters.scss";
import Card from "../Card/Card";
const Filters = (props) => {
    const [filter, setFilter] = useState("");
    const [data, setData] = useState(props.cardData);
    useEffect(() => {
        const frontEndConditions = ["React", "Sass", "HTML", "Javascript", "CSS"];
        const backEndConditions = ["NodeJS", "MongoDB", "Express"];
        if (filter === "backend") {
            const backendData = props.cardData.filter((element) => backEndConditions.some((data) => element.techno.includes(data)));
            setData(backendData);
        }
        if (filter === "frontend") {
            const frontendData = props.cardData.filter((element) => frontEndConditions.some((data) => element.techno.includes(data)));
            setData(frontendData);
        }
        if (filter === "all") {
            setData(props.cardData);
        }
    }, [filter]);

    return (
        <div className="filters">
            <ul className="filters__list">
                <li className="filters__list--delete" onClick={() => setFilter("all")}>
                    × TOUS
                </li>
                <li className="filters__list--react" onClick={() => setFilter("frontend")}>
                    × Frontend
                </li>
                <li className="filters__list--javascript" onClick={() => setFilter("backend")}>
                    × Backend
                </li>
            </ul>
            <div className="project__card">
                {data.map((card) => {
                    return <Card name={card.name} image={card.image} description={card.description} badge={card.techno} key={Math.random()} />;
                })}
            </div>
        </div>
    );
};

export default Filters;
