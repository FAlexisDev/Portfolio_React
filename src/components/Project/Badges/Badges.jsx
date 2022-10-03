import React, { useRef } from "react";
import "./Badges.scss";

const Badges = (props) => {
    const badge = useRef(null);
    // useEffect(() => {
    //     const color = badges.get(props.badge);
    //     badge.current.style.background = color;
    // }, []);

    return (
        <div className="test">
            <h2 className="badge" ref={badge}>
                {props.badge}
            </h2>
        </div>
    );
};

export default Badges;
