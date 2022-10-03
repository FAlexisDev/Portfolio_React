import React from "react";
import "./GoogleCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const GoogleCard = () => {
    return (
        <div className="card__google">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92456.97242131893!2d1.4328424499999999!3d43.600703249999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411030!2sToulouse!5e0!3m2!1sfr!2sfr!4v1663689253510!5m2!1sfr!2sfr"
                allowFullScreen=""
                className="card__google--container"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="card"
            />
            <div className="card__google--contact">
                <a href="https://www.linkedin.com/in/lkzalexis" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="card__google--contact--icon" />
                </a>
                <a href="https://www.github.com/FAlexisDev" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="card__google--contact--icon" />
                </a>
            </div>
        </div>
    );
};

export default GoogleCard;
