import React, { useRef } from "react";
import "./Badges.scss";

const Badges = (props) => {
    const badge = useRef(null);

    return (
        <div className="test">
            <h2 className="badge" ref={badge}>
                {props.badge}
            </h2>
        </div>
    );
};

export default Badges;
