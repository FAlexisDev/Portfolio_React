import React, { useEffect, useState } from "react";
import "./Skill.scss";
import CircularProgress from "@mui/material/CircularProgress";

const Skill = (props) => {
    const [progress, setProgress] = useState(0);
    const [mouseEnter, setMouseEnter] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= props.value ? props.value : prevProgress + 10));
        }, 100);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="skill" onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)} onClick={() => setMouseEnter(true)}>
            <CircularProgress className="progressBar" variant="determinate" value={progress}>
                {progress}
            </CircularProgress>

            <img src={props.image} alt="" className={mouseEnter ? "skill__image--active" : "skill__image"} />

            {mouseEnter === true ? <p className="skill__name">{props.name}</p> : ""}
            <p className="skill__value">{progress} %</p>
        </div>
    );
};

export default Skill;
