import React from "react";
import Badges from "../Badges/Badges";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./Card.scss";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt="" className="card__image" />
            <div className="badge__title--container">
                <div className="badge__title--namelink">
                    <h2 className="card__name">{props.name}</h2>
                    <a href={props.link} target="_blank" className="card__link" rel="noreferrer">
                        <FontAwesomeIcon icon={faLink} />
                    </a>
                </div>

                <div className="card__badge">
                    {props.badge
                        .sort((a, b) => a - b)
                        .map((badge) => {
                            return <Badges badge={badge} className="card__badge--label" key={Math.random()} />;
                        })}
                </div>
            </div>
        </div>
    );
};

export default Card;
