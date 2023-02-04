import React, { useEffect, useRef, useState } from "react";
import "./Skill.scss";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const Skill = (props) => {
    const [progress, setProgress] = useState(0);
    const [x, setX] = useState(1);
    const target = props.value / 100;
    const skillRef = useRef(null);
    const [isVisible, setIsVisible] = useState();

    const options = {
        root: document.querySelector("#scrollArea"),
        rootMargin: "0px 0px 50px 0px",
        threshold: 0.9,
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
        }, options);
        observer.observe(skillRef.current);
    }, [options]);

    useEffect(() => {
        if (x <= 10) {
            setTimeout(() => {
                let y = Math.log10(x);
                setX(x + 2);
                setProgress(y * target * 100);
            }, 1);
        }
    }, [x, target]);

    return (
        <div className="skill" ref={skillRef}>
            <div className="skill__mobile">
                <Box sx={{ width: "100%" }} className="skill__mobile--box">
                    <LinearProgress variant="determinate" value={isVisible ? progress : 0} />
                    <div>
                        <img src={props.image} alt="" className="skill__mobile--image" />
                        <p className="skill__mobile--name">{props.name}</p>
                        <p className="skill__mobile--value">{isVisible ? progress.toFixed() : 0} %</p>
                    </div>
                </Box>
                <div className="skill__circular">
                    <div ref={skillRef} className="skill__desktop">
                        <CircularProgress variant="determinate" value={isVisible ? progress : 0}>
                            {isVisible ? progress : 0}
                        </CircularProgress>
                        <img src={props.image} alt="" className="skill__image" />
                        <p className="skill__value">{isVisible ? progress.toFixed() : 0} %</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
