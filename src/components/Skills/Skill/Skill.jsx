import React, { useEffect, useRef, useState } from "react";
import "./Skill.scss";
import CircularProgress from "@mui/material/CircularProgress";

const Skill = (props) => {
    const [progress, setProgress] = useState(0);
    const [x, setX] = useState(1);
    const [mouseEnter, setMouseEnter] = useState(false);
    const target = props.value / 100;

    // useEffect(() => {
    //     if (x <= 10) {
    //         setTimeout(() => {
    //             let y = Math.log10(x);
    //             setX(x + 1);
    //             setProgress(y * target * 100);
    //             console.log(x, progress);
    //         }, 2);
    //     }
    // }, [x]);

    // const progressRef = useRef(() => {});
    // useEffect(() => {
    //     progressRef.current = () => {
    //         let y = Math.log10(x);
    //         setX(x + 1);
    //         setProgress(y * target * 100);
    //         console.log(x, progress);
    //     };
    // });

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         if (x <= 10) {
    //             progressRef.current();
    //         }
    //     }, 500);

    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, []);
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setProgress((prevProgress) => (prevProgress >= props.value ? props.value : prevProgress + 1));
    //     }, 5);
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, []);

    return (
        <div className="skill" onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)} onClick={() => setMouseEnter(true)}>
            <CircularProgress variant="determinate" value={progress}>
                {progress}
            </CircularProgress>

            <img src={props.image} alt="" className={mouseEnter ? "skill__image--active" : "skill__image"} />

            {mouseEnter === true ? <p className="skill__name">{props.name}</p> : ""}
            <p className="skill__value">{progress} %</p>
        </div>
    );
};

export default Skill;
