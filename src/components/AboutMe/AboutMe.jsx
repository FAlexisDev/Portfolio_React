import React from "react";
import ImageBg from "../../assets/images/green_aboutme_background.png";
import "./AboutMe.scss";

const AboutMe = () => {
    return (
        <div className="AboutMe">
            <div className="AboutMe__text">
                <h2 className="AboutMe__text--title">À propos de moi 👋</h2>
                <p className="AboutMe__text--content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corporis voluptatibus enim? Praesentium cumque quisquam eligendi iste
                    alias consequuntur repellat, totam eius distinctio. Voluptatibus est quas recusandae maiores, possimus sint.
                </p>
            </div>
            <div className="AboutMe__image">
                <img src={ImageBg} alt="" className="AboutMe__image--bg" />
            </div>
        </div>
    );
};

export default AboutMe;
