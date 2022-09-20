import React from "react";
import Badges from "../Badges/Badges";
import "./Card.scss";
const Card = (props) => {
    return (
        <div className="card">
            <h2 className="card__name">{props.name}</h2>
            <img src={props.image} alt="" className="card__image" />
            <div className="card__badge">
                {props.badge
                    .sort((a, b) => a - b)
                    .map((badge) => {
                        return <Badges badge={badge} className="card__badge--label" key={Math.random()} />;
                    })}
            </div>
        </div>
    );
};

export default Card;
